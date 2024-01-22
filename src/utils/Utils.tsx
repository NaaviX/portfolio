import moment, { duration } from 'moment'

export const getAge = (date: string): number => {
    const today = new Date()
    const birthday = new Date(date)
    const diff = new Date(today.getTime() - birthday.getTime())

    const epoch = new Date(0)

    return Math.abs(diff.getUTCFullYear() - epoch.getUTCFullYear())
}

export function formatDateMonthYear(date: Date): string {
    return moment(date).format('MMMM YYYY')
}

export function formatDurationMonthYear(dateFrom: Date, dateTo: Date): string {
    const time = duration(moment(dateTo).diff(moment(dateFrom)))
    let years = time.years()
    let months = time.months() + 1
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
