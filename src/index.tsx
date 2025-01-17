import App from '@/App'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto/latin.css'
import '@fontsource/space-grotesk/400.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { FooterSection } from './pages/FooterSection'

const root = createRoot(document.getElementById('root') as HTMLElement)

/*
cyan :
  App background: #0b161a;
  Subtle background: #101b20;
  UI element background: #082c36;
  Hovered UI element background: #003848;
  Active / Selected UI element background: #004558;
  Subtle borders and separators: #045468;
  UI element border and focus rings: #12677e;
  Hovered UI element border: #11809c;
  Solid backgrounds: #00a2c7;
  Hovered solid backgrounds: #23afd0;
  Low-contrast text: #4ccce6;
  High-contrast text: #b6ecf7;
*/

const appTheme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    colors: {
        bg: '#082c36',
        'bg-hover': '#003848',
        border: '#12677e',
        'border-hover': '#11809c',
        'primary-light': '#b6ecf7',
        'primary-dark': '#4ccce6',
    },
    fonts: {
        body: 'Roboto, system-ui, sans-serif',
        heading: 'Roboto, "Space Grotesk", serif',
    },
    fontSizes: {
        '3xs': '0.45rem',
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    styles: {
        global: {
            '*': {
                fontSize: 'md',
            },
            'input, textarea, button': {
                borderColor: 'border !important',
                _hover: {
                    borderColor: 'border-hover !important',
                    backgroundColor: 'transparent !important',
                },
                _focus: {
                    backgroundColor: 'transparent !important',
                },
            },
        },
    },
})
root.render(
    <StrictMode>
        <ChakraProvider theme={appTheme}>
            <>
                <ColorModeScript
                    initialColorMode={appTheme.config.initialColorMode}
                />
                <Navbar />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </BrowserRouter>
                <FooterSection />
            </>
        </ChakraProvider>
    </StrictMode>
)
