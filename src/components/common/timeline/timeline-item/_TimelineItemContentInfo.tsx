import { cn } from '@/lib/utils'
import { formatDurationMonthYear, useMediumScreen } from '@/utils/Utils'
import {
    Briefcase,
    Calendar,
    Clock,
    GraduationCap,
    Sparkles,
} from 'lucide-react'
import { FaBuilding, FaLocationDot } from 'react-icons/fa6'

type TimelineItemContentInfoProps = {
    activities: string[]
    type: string
    institution?: string
    city: string
    dateFrom: Date
    dateTo?: Date
}

const InfoItem = ({ children }: { children: React.ReactNode }) => (
    <div className='flex items-center gap-1.5 text-primary-dark'>
        {children}
    </div>
)

const getTypeBadgeConfig = (type: string) => {
    switch (type.toLowerCase()) {
        case 'cdi':
            return {
                icon: Briefcase,
                bgClass: 'bg-emerald-500/10 border-emerald-500/30',
                textClass: 'text-emerald-400',
                iconClass: 'text-emerald-400',
            }
        case 'apprentissage':
            return {
                icon: GraduationCap,
                bgClass: 'bg-sky-500/10 border-sky-500/30',
                textClass: 'text-sky-400',
                iconClass: 'text-sky-400',
            }
        case 'indépendant':
            return {
                icon: Sparkles,
                bgClass: 'bg-violet-500/10 border-violet-500/30',
                textClass: 'text-violet-400',
                iconClass: 'text-violet-400',
            }
        default:
            return {
                icon: Briefcase,
                bgClass: 'bg-primary/10 border-primary/30',
                textClass: 'text-primary',
                iconClass: 'text-primary',
            }
    }
}

const TypeBadge = ({ type }: { type: string }) => {
    const config = getTypeBadgeConfig(type)
    const Icon = config.icon

    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium tracking-wide border',
                'transition-all duration-300 hover:scale-105',
                config.bgClass,
                config.textClass
            )}
        >
            <Icon className={cn('w-3.5 h-3.5', config.iconClass)} />
            {type}
        </span>
    )
}

export const TimelineItemContentInfo = (
    props: TimelineItemContentInfoProps
) => {
    const { activities, type, institution, city, dateFrom, dateTo } = props
    const isMedium = useMediumScreen()

    return (
        <div
            className={cn(
                'mt-5 flex flex-wrap items-center',
                isMedium && activities.length > 0
                    ? 'flex-row gap-4'
                    : 'flex-col gap-2 items-start',
                isMedium ? (activities.length === 0 ? 'ml-2' : 'ml-0') : 'ml-0'
            )}
        >
            {!isMedium && (
                <div className='flex flex-wrap items-center gap-3 mb-1'>
                    <InfoItem>
                        <Calendar className='h-4 w-4 text-primary' />
                        <span className='text-sm'>
                            {dateFrom.getFullYear()} -{' '}
                            {dateTo ? dateTo.getFullYear() : 'Présent'}
                        </span>
                    </InfoItem>
                    <InfoItem>
                        <Clock className='h-4 w-4 text-primary' />
                        <span className='text-sm'>
                            {formatDurationMonthYear(
                                dateFrom,
                                dateTo || new Date()
                            )}
                        </span>
                    </InfoItem>
                </div>
            )}

            <div className='flex flex-wrap items-center gap-3'>
                {type && type !== '' && <TypeBadge type={type} />}

                {institution && institution !== '' && (
                    <InfoItem>
                        <FaBuilding className='text-primary' />
                        <span className='text-sm font-medium text-primary-light'>
                            {institution}
                        </span>
                    </InfoItem>
                )}

                {city && city !== '' && (
                    <InfoItem>
                        <FaLocationDot className='text-primary' />
                        <span className='text-sm'>{city}</span>
                    </InfoItem>
                )}
            </div>
        </div>
    )
}
