import { cn } from '@/lib/utils'
import { formatDurationMonthYear, useMediumScreen } from '@/utils/Utils'
import { Calendar, Clock } from 'lucide-react'
import { FaBuilding, FaFileSignature, FaLocationDot } from 'react-icons/fa6'

type TimelineItemContentInfoProps = {
    activities: string[]
    type: string
    institution?: string
    city: string
    dateFrom: Date
    dateTo?: Date
}

const InfoItem = ({ children }: { children: React.ReactNode }) => (
    <div className='flex items-center gap-1'>{children}</div>
)

export const TimelineItemContentInfo = (
    props: TimelineItemContentInfoProps
) => {
    const { activities, type, institution, city, dateFrom, dateTo } = props
    const isMedium = useMediumScreen()

    return (
        <div
            className={cn(
                'mt-5 flex',
                isMedium && activities.length > 0
                    ? 'flex-row gap-6'
                    : 'flex-col gap-1',
                isMedium
                    ? activities.length === 0
                        ? 'ml-2'
                        : 'ml-0'
                    : 'ml-1.5'
            )}
        >
            {!isMedium && (
                <>
                    <InfoItem>
                        <Calendar className='h-4 w-4' />
                        {dateFrom.getFullYear()} -{' '}
                        {dateTo ? dateTo.getFullYear() : 'Now'}
                    </InfoItem>
                    <InfoItem>
                        <Clock className='h-4 w-4' />
                        {formatDurationMonthYear(
                            dateFrom,
                            dateTo || new Date()
                        )}
                    </InfoItem>
                </>
            )}
            {type && type !== '' ? (
                <InfoItem>
                    <FaFileSignature />
                    {type}
                </InfoItem>
            ) : null}
            {institution && institution !== '' ? (
                <InfoItem>
                    <FaBuilding />
                    {institution}
                </InfoItem>
            ) : null}
            {city && city !== '' ? (
                <InfoItem>
                    <FaLocationDot />
                    {city}
                </InfoItem>
            ) : null}
        </div>
    )
}
