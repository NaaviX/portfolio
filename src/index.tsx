import App from '@/App'
import '@fontsource/roboto/latin.css'
import '@fontsource/space-grotesk/400.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollProgress } from './components/common'
import { Navbar } from './components/navbar'
import { FooterSection } from './pages/FooterSection'
import { initGA } from './utils/analytics'
import './index.css'

// Initialisation de GA4
initGA()

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <StrictMode>
        <ScrollProgress />
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
        <FooterSection />
    </StrictMode>
)
