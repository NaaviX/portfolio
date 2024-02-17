import { useMediaQuery, useTheme } from '@chakra-ui/react'
import dayjs from 'dayjs'

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

export const useLargeScreen = () => {
    return useMediaQuery(
        '(min-width: ' + useTheme().__breakpoints!.asObject['lg'] + ')',
        {
            ssr: false,
            fallback: false, // return false on the server, and re-evaluate on the client side
        }
    )[0]
}

export const useMediumScreen = () => {
    return useMediaQuery(
        '(min-width: ' + useTheme().__breakpoints!.asObject['md'] + ')',
        {
            ssr: false,
            fallback: false, // return false on the server, and re-evaluate on the client side
        }
    )[0]
}
