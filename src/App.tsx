import '@fontsource/roboto'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import moment from 'moment/moment'
import { Element } from 'react-scroll'
import './App.css'
import SectionLayout from './components/sections/SectionLayout'
import { Section, sectionsData } from './components/sections/sections.data'
import Header from './sections/Header'
moment().locale('fr')

const App = () => {
    useLenis(({ scroll }) => {
        console.log(scroll)
    })
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
