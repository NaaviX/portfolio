import {
    parseProjectPath,
    useGitLabProjectStats,
} from '@/hooks/useGitLabProjectStats'
import { useLanguage } from '@/i18n/LanguageContext'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import type { Project } from '../projects.type'
import { CommitSparkline } from './_CommitSparkline'

type StripSize = 'normal' | 'compact'

interface GitLabProjectStripProps {
    project: Pick<Project, 'gitLink' | 'gitStatsPath'>
    size?: StripSize
}

const resolvePath = (
    project: Pick<Project, 'gitLink' | 'gitStatsPath'>
): string | undefined => {
    if (project.gitStatsPath) return project.gitStatsPath
    if (project.gitLink) return parseProjectPath(project.gitLink) ?? undefined
    return undefined
}

const formatRelative = (iso: string, language: 'fr' | 'en'): string => {
    const diffMs = Date.now() - new Date(iso).getTime()
    const days = Math.max(1, Math.round(diffMs / 86_400_000))
    if (days < 30) return language === 'fr' ? `${days}j` : `${days}d`
    const months = Math.round(days / 30)
    if (months < 12) return language === 'fr' ? `${months} mois` : `${months}mo`
    const years = Math.round(months / 12)
    return language === 'fr' ? `${years} ans` : `${years}y`
}

export const GitLabProjectStrip = ({
    project,
    size = 'normal',
}: GitLabProjectStripProps) => {
    const path = resolvePath(project)
    const { stats, error } = useGitLabProjectStats(path)
    const { t, language } = useLanguage()
    const reduce = useReducedMotion() ?? false

    if (!path || error || !stats) return null

    const labels = t.gitlabProject
    const relative = stats.lastActivity
        ? formatRelative(stats.lastActivity, language)
        : null
    const topLang = stats.languages[0]
    const isCompact = size === 'compact'

    const formattedCommits = stats.commits.toLocaleString(
        language === 'fr' ? 'fr-FR' : 'en-US'
    )

    return (
        <motion.div
            initial={reduce ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.7, ease: EASE_OUT_QUART }}
            className={cn(
                'flex items-center justify-between gap-3 border-t border-border-subtle/50',
                isCompact ? 'pt-2.5' : 'pt-3'
            )}
            aria-label={labels.aria}
        >
            <div
                className={cn(
                    'flex items-center min-w-0',
                    isCompact ? 'gap-2' : 'gap-3'
                )}
            >
                <Stat
                    value={formattedCommits}
                    label={labels.commits}
                    isCompact={isCompact}
                />
                {relative && (
                    <>
                        <Divider />
                        <Stat
                            value={relative}
                            label={labels.lastUpdate}
                            isCompact={isCompact}
                        />
                    </>
                )}
                {topLang && !isCompact && (
                    <>
                        <Divider />
                        <Stat
                            value={topLang.name}
                            label={labels.topLanguage}
                            isCompact={isCompact}
                        />
                    </>
                )}
            </div>
            <CommitSparkline
                weeks={stats.weeklyCommits}
                width={isCompact ? 60 : 80}
                height={isCompact ? 16 : 18}
                ariaLabel={labels.commitsAria}
            />
        </motion.div>
    )
}

const Stat = ({
    value,
    label,
    isCompact,
}: {
    value: string
    label: string
    isCompact: boolean
}) => (
    <div className='flex items-baseline gap-1.5 min-w-0'>
        <span
            className={cn(
                'text-primary-light tabular-nums font-medium leading-none truncate',
                isCompact ? 'text-[11px]' : 'text-xs'
            )}
        >
            {value}
        </span>
        <span
            className={cn(
                'tracking-[0.18em] uppercase font-mono text-primary-light/45 leading-none whitespace-nowrap',
                isCompact ? 'text-[8px]' : 'text-[9px]'
            )}
        >
            {label}
        </span>
    </div>
)

const Divider = () => (
    <span
        aria-hidden
        className='h-2.5 w-px bg-border-subtle/70 flex-shrink-0'
    />
)
