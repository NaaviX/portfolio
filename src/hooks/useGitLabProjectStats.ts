import { useEffect, useState } from 'react'
import type { GitLabLanguage } from './useGitLabStats'

export type GitLabProjectStats = {
    commits: number
    lastActivity: string | null
    weeklyCommits: number[]
    weeklyMode?: 'recent' | 'lifetime'
    languages: GitLabLanguage[]
    defaultBranch: string
    openIssues: number
    openMergeRequests: number
    visibility: 'public' | 'internal' | 'private'
    updatedAt: string
}

const BASE_URL = 'https://antoine-legrand.dev/backend/gitlab-project-stats'

export const parseProjectPath = (gitLink: string): string | null => {
    try {
        const url = new URL(gitLink)
        if (url.hostname !== 'gitlab.com') return null
        const path = url.pathname
            .replace(/^\/+|\/+$/g, '')
            .replace(/\.git$/, '')
        return path || null
    } catch {
        return null
    }
}

export const useGitLabProjectStats = (path: string | undefined) => {
    const [stats, setStats] = useState<GitLabProjectStats | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!path) {
            setStats(null)
            setError(false)
            return
        }
        let cancelled = false
        const url = `${BASE_URL}?path=${encodeURIComponent(path)}`
        fetch(url)
            .then(async (r) => {
                if (!r.ok) throw new Error(String(r.status))
                return (await r.json()) as GitLabProjectStats
            })
            .then((data) => {
                if (!cancelled) setStats(data)
            })
            .catch(() => {
                if (!cancelled) setError(true)
            })
        return () => {
            cancelled = true
        }
    }, [path])

    return { stats, error }
}
