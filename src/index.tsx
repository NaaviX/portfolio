import App from '@/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ScrollProgress } from './components/common'
import { Navbar } from './components/navbar'
import { LanguageProvider } from './i18n'
import './index.css'
import { FooterSection } from './pages/FooterSection'
import { initGA } from './utils/analytics'

initGA()

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <StrictMode>
        <LanguageProvider>
            <ScrollProgress />
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
            <FooterSection />
        </LanguageProvider>
    </StrictMode>
)
