import { ReactLenis } from '@studio-freight/react-lenis'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { Element } from 'react-scroll'
import './App.css'
import SectionLayout from './components/sections/SectionLayout'
import { Section, sectionsData } from './components/sections/sections.data'
import Header from './sections/Header'
dayjs.locale('fr')

const App = () => {
    return (
        <ReactLenis root>
            <Header />

            {sectionsData.map((section: Section) => (
                <Element
                    name={section.target}
                    key={section.name}
                    className='element'
                    style={{ position: 'relative' }}
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
