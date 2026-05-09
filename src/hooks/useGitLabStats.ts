import { useEffect, useState } from 'react'

export type GitLabLanguage = {
    name: string
    percent: number
}

export type GitLabTopProject = {
    name: string
    commits: number
    url: string
    visibility: 'public' | 'internal' | 'private'
}

export type GitLabDay = {
    commits: number
    additions: number
    deletions: number
}

// Backend may briefly serve the legacy shape (number per day) right after deploy
// while the in-memory cache is still hot. Normalize on read.
export type GitLabCalendarRaw = Record<string, number | GitLabDay>

export type GitLabStats = {
    commits30d: number
    activeDays30d: number
    linesAdded30d?: number
    linesRemoved30d?: number
    calendar: GitLabCalendarRaw
    memberSince: string
    lastActivity: string | null
    languages: GitLabLanguage[]
    topProjects: GitLabTopProject[]
    updatedAt: string
}

export const normalizeDay = (
    raw: number | GitLabDay | undefined
): GitLabDay => {
    if (!raw) return { commits: 0, additions: 0, deletions: 0 }
    if (typeof raw === 'number') {
        return { commits: raw, additions: 0, deletions: 0 }
    }
    return raw
}

const STATS_URL = 'https://antoine-legrand.dev/backend/gitlab-stats'

const fetchStats = (forceRefresh = false): Promise<GitLabStats> => {
    const url = forceRefresh ? `${STATS_URL}?refresh=1` : STATS_URL
    return fetch(url, forceRefresh ? { cache: 'no-store' } : undefined).then(
        async (r) => {
            if (!r.ok) throw new Error(String(r.status))
            return (await r.json()) as GitLabStats
        }
    )
}

// Kick the request off the moment this module is parsed, so it overlaps
// with the rest of the app bootstrap (lazy chunks, font load, hydration).
let statsPromise: Promise<GitLabStats> | null = null
const getStatsPromise = (): Promise<GitLabStats> => {
    if (!statsPromise) statsPromise = fetchStats()
    return statsPromise
}

if (typeof window !== 'undefined') {
    // Eagerly trigger; ignore errors here so they surface inside the hook.
    getStatsPromise().catch(() => {})
}

const subscribers = new Set<(s: GitLabStats) => void>()

export const useGitLabStats = () => {
    const [stats, setStats] = useState<GitLabStats | null>(null)
    const [error, setError] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        let cancelled = false
        getStatsPromise()
            .then((data) => {
                if (!cancelled) setStats(data)
            })
            .catch(() => {
                if (!cancelled) setError(true)
            })
        const onUpdate = (data: GitLabStats) => {
            if (!cancelled) setStats(data)
        }
        subscribers.add(onUpdate)
        return () => {
            cancelled = true
            subscribers.delete(onUpdate)
        }
    }, [])

    const refresh = async () => {
        if (refreshing) return
        setRefreshing(true)
        setError(false)
        try {
            const fresh = await fetchStats(true)
            statsPromise = Promise.resolve(fresh)
            setStats(fresh)
            subscribers.forEach((fn) => fn(fresh))
        } catch {
            setError(true)
        } finally {
            setRefreshing(false)
        }
    }

    return { stats, error, loading: !stats && !error, refresh, refreshing }
}
