type Language = 'fr' | 'en'

/**
 * Formats a year span for a timeline entry. An open-ended entry (no end date)
 * resolves to a localized "present" marker so the most recent item reads as live.
 */
export const formatYearRange = (
    dateFrom: Date,
    dateTo: Date | undefined,
    language: Language
): string => {
    const from = dateFrom.getFullYear()
    const to = dateTo
        ? dateTo.getFullYear()
        : language === 'fr'
          ? 'Présent'
          : 'Present'
    return `${from} - ${to}`
}

/** Localized, whole-year duration between two dates (open-ended counts to today). */
export const getDuration = (
    dateFrom: Date,
    dateTo: Date | undefined,
    language: Language
): string => {
    const end = dateTo ?? new Date()
    const years = Math.max(1, end.getFullYear() - dateFrom.getFullYear())
    if (language === 'fr') {
        return years === 1 ? '1 an' : `${years} ans`
    }
    return years === 1 ? '1 year' : `${years} years`
}
