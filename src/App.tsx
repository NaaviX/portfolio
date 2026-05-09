import { GlobalBackground } from '@/components/common/GlobalBackground'
import { GlobalTechField } from '@/components/common/GlobalTechField'
// Side-effect import: triggers the module-level GitLab fetch at app boot,
// so data is in flight while the lazy Skills chunk is still being downloaded.
import '@/hooks/useGitLabStats'
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
    position: 'relative',
} as const

// Loading skeleton for lazy-loaded sections
const SectionSkeleton = () => (
    <div className='w-full min-h-[200px] animate-pulse bg-bg-subtle/30 rounded-lg' />
)

const useActiveSectionTitle = (
    baseTitle: string,
    sectionTitle: (target: string) => { num: string; title: string } | null
) => {
    useEffect(() => {
        document.title = baseTitle
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) => b.intersectionRatio - a.intersectionRatio
                    )[0]
                if (!visible) {
                    document.title = baseTitle
                    return
                }
                const name = visible.target.getAttribute('name')
                if (!name) return
                const match = sectionTitle(name)
                if (!match) {
                    document.title = baseTitle
                    return
                }
                document.title = `${match.num} · ${match.title} · Antoine Legrand`
            },
            { rootMargin: '-30% 0px -50% 0px', threshold: [0.05, 0.5, 0.9] }
        )
        const elements = document.querySelectorAll('[name].element')
        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [baseTitle, sectionTitle])
}

const App = () => {
    const { language, t } = useLanguage()

    useEffect(() => {
        dayjs.locale(language)
    }, [language])

    useActiveSectionTitle(t.meta.baseTitle, (target) => {
        const idx = sectionsData.findIndex((s) => s.target === target)
        if (idx === -1) return null
        return {
            num: String(idx + 1).padStart(2, '0'),
            title: t.nav[sectionsData[idx].nameKey],
        }
    })

    return (
        <ReactLenis root>
            <GlobalBackground />
            <GlobalTechField />
            <HeaderSection />
            <Toaster />

            {sectionsData.map((section: Section, index: number) => (
                <Element
                    name={section.target}
                    key={section.nameKey}
                    className='element pt-20 md:pt-[150px]'
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
