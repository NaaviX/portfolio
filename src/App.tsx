import { ReactLenis } from '@studio-freight/react-lenis'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { Element } from 'react-scroll'
import './App.css'
import { HeaderSection } from './sections/HeaderSection'
import { SectionLayout } from './sections/components/SectionLayout'
import { Section, sectionsData } from './sections/sections.data'
dayjs.locale('fr')

const App = () => {
    return (
        <ReactLenis root>
            <HeaderSection />

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
