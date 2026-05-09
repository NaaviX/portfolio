import { useLanguage } from '@/i18n'
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
    typeKey: string
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

const getTypeIcon = (typeKey: string) => {
    switch (typeKey) {
        case 'cdi':
            return Briefcase
        case 'apprenticeship':
            return GraduationCap
        case 'freelance':
            return Sparkles
        default:
            return Briefcase
    }
}

const TypeBadge = ({ type, typeKey }: { type: string; typeKey: string }) => {
    const Icon = getTypeIcon(typeKey)
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border',
                'border-primary/25 bg-primary/10 text-primary',
                'font-mono text-[0.6rem] tracking-[0.18em] uppercase',
                'transition-all duration-300 hover:scale-105 hover:bg-primary/15'
            )}
        >
            <Icon className='w-3 h-3' />
            {type}
        </span>
    )
}

export const TimelineItemContentInfo = (
    props: TimelineItemContentInfoProps
) => {
    const { language } = useLanguage()
    const { activities, type, typeKey, institution, city, dateFrom, dateTo } =
        props
    const isMedium = useMediumScreen()

    const presentText = language === 'fr' ? 'Présent' : 'Present'

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
                            {dateTo ? dateTo.getFullYear() : presentText}
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
                {type && type !== '' && (
                    <TypeBadge type={type} typeKey={typeKey} />
                )}

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
