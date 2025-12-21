import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export function formatDateMonthYear(date: Date): string {
    return dayjs(date).format('MMMM YYYY')
}

export function formatDurationMonthYear(dateFrom: Date, dateTo: Date): string {
    let years = dayjs(dateTo).diff(dayjs(dateFrom), 'years')
    let months = dayjs(dateTo).diff(dayjs(dateFrom), 'months') - years * 12 + 1
    if (months === 12) {
        years += 1
        months = 0
    }
    let str = ''
    if (years > 0) {
        str += years
        if (years > 1) {
            str += ' ans'
        } else {
            str += ' an'
        }
        if (months > 0) {
            str += ' et '
        }
    }
    if (months > 0) {
        str += months + ' mois'
    }
    return str
}

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        media.addEventListener('change', listener)
        return () => media.removeEventListener('change', listener)
    }, [matches, query])

    return matches
}

export const useLargeScreen = () => {
    return useMediaQuery('(min-width: 1024px)')
}

export const useMediumScreen = () => {
    return useMediaQuery('(min-width: 768px)')
}
