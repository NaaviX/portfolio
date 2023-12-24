import '@fontsource/roboto'
import Lenis from '@studio-freight/lenis'
import moment from 'moment/moment'
import { useEffect } from 'react'
import { Element } from 'react-scroll'
import './App.css'
import SectionLayout from './components/sections/SectionLayout'
import { Section, sectionsData } from './components/sections/sections.data'
import Header from './sections/Header'
moment().locale('fr')

const App = () => {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })
    return (
        <>
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
        </>
    )
}

export default App
