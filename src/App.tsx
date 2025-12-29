import { useLanguage } from '@/i18n'
import { ReactLenis } from '@studio-freight/react-lenis'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/fr'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Element } from 'react-scroll'
import { SectionLayout } from './pages/components/SectionLayout'
import { HeaderSection } from './pages/HeaderSection'
import { Section, sectionsData } from './pages/sections.data'

const App = () => {
    const { language, t } = useLanguage()

    useEffect(() => {
        dayjs.locale(language)
    }, [language])

    return (
        <ReactLenis root>
            <HeaderSection />
            <Toaster />

            {sectionsData.map((section: Section) => (
                <Element
                    name={section.target}
                    key={section.nameKey}
                    className='element'
                    style={{
                        marginTop: '1px',
                        paddingTop: '150px',
                        position: 'relative',
                    }}
                >
                    <SectionLayout title={t.nav[section.nameKey]}>
                        <section.element />
                    </SectionLayout>
                </Element>
            ))}
        </ReactLenis>
    )
}

export default App
