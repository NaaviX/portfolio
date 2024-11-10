import { useTheme } from '@chakra-ui/react'
import { ReactLenis } from '@studio-freight/react-lenis'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { Toaster } from 'react-hot-toast'
import { Element } from 'react-scroll'
import './App.css'
import { HeaderSection } from './sections/HeaderSection'
import { SectionLayout } from './sections/components/SectionLayout'
import { Section, sectionsData } from './sections/sections.data'
dayjs.locale('fr')

const App = () => {
    console.log(useTheme())
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
