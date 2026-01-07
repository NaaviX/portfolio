import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { Language, translations, Translations } from './translations'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

const STORAGE_KEY = 'portfolio-language'

const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored

    const browserLang = navigator.language.split('-')[0]
    return browserLang === 'fr' ? 'fr' : 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage)

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem(STORAGE_KEY, lang)
    }, [])

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    // Memoize context value to prevent unnecessary re-renders
    const value = useMemo<LanguageContextType>(
        () => ({
            language,
            setLanguage,
            t: translations[language],
        }),
        [language, setLanguage]
    )

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
