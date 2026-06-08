import { GlobalBackground } from '@/components/common/GlobalBackground'
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

// Loading skeleton for lazy-loaded sections
const SectionSkeleton = () => (
    <div className='w-full min-h-[220px] animate-pulse rounded-lg border border-border-subtle/40 bg-primary-light/5' />
)

const SECTION_STYLES: Record<Section['target'], string> = {
    skills: 'pt-12 pb-16 md:pt-16 md:pb-24',
    experiences:
        'py-16 md:py-24 bg-[linear-gradient(180deg,rgba(47,199,223,0.055),rgba(47,199,223,0.015))]',
    projects: 'py-16 md:py-28',
    courses:
        'py-16 md:py-24 bg-[linear-gradient(180deg,rgba(215,245,247,0.035),rgba(215,245,247,0.012))]',
    contact: 'py-16 md:py-28',
}

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
                document.title = `${match.title} | Antoine Legrand`
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
            <main className='page-shell'>
                <GlobalBackground />
                <HeaderSection />
                <Toaster />

                {sectionsData.map((section: Section) => (
                    <Element
                        name={section.target}
                        key={section.nameKey}
                        className='element relative scroll-mt-24'
                    >
                        <section className={SECTION_STYLES[section.target]}>
                            <SectionLayout
                                title={t.nav[section.nameKey]}
                                subtitle={t.sectionSubtitles[section.nameKey]}
                            >
                                <Suspense fallback={<SectionSkeleton />}>
                                    <section.element />
                                </Suspense>
                            </SectionLayout>
                        </section>
                    </Element>
                ))}
            </main>
        </ReactLenis>
    )
}

export default App
