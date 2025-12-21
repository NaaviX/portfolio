import { ReactLenis } from '@studio-freight/react-lenis'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { Toaster } from 'react-hot-toast'
import { Element } from 'react-scroll'
import { SectionLayout } from './pages/components/SectionLayout'
import { HeaderSection } from './pages/HeaderSection'
import { Section, sectionsData } from './pages/sections.data'

dayjs.locale('fr')

const App = () => {
    return (
        <ReactLenis root>
            <HeaderSection />
            <Toaster />

            {sectionsData.map((section: Section) => (
                <Element
                    name={section.target}
                    key={section.name}
                    className='element'
                    style={{
                        marginTop: '1px',
                        paddingTop: '150px',
                        position: 'relative',
                    }}
                >
                    <SectionLayout title={section.name}>
                        <section.element />
                    </SectionLayout>
                </Element>
            ))}
        </ReactLenis>
    )
}

export default App
