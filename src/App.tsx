import { useLanguage } from '@/i18n'
import { ReactLenis } from '@studio-freight/react-lenis'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/fr'
import { Suspense, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Element } from 'react-scroll'
import { SectionLayout } from './pages/components/SectionLayout'
import { HeaderSection } from './pages/HeaderSection'
import { Section, sectionsData } from './pages/sections.data'

// Extracted style constant to prevent object recreation on each render
const ELEMENT_STYLE = {
    marginTop: '1px',
    paddingTop: '150px',
    position: 'relative',
} as const

// Loading skeleton for lazy-loaded sections
const SectionSkeleton = () => (
    <div className='w-full min-h-[200px] animate-pulse bg-bg-subtle/30 rounded-lg' />
)

const App = () => {
    const { language, t } = useLanguage()

    useEffect(() => {
        dayjs.locale(language)
    }, [language])

    return (
        <ReactLenis root>
            <HeaderSection />
            <Toaster />

            {sectionsData.map((section: Section, index: number) => (
                <Element
                    name={section.target}
                    key={section.nameKey}
                    className='element'
                    style={ELEMENT_STYLE}
                >
                    <SectionLayout
                        number={String(index + 1).padStart(2, '0')}
                        title={t.nav[section.nameKey]}
                        subtitle={t.sectionSubtitles[section.nameKey]}
                    >
                        <Suspense fallback={<SectionSkeleton />}>
                            <section.element />
                        </Suspense>
                    </SectionLayout>
                </Element>
            ))}
        </ReactLenis>
    )
}

export default App
