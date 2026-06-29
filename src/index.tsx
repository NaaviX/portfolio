import App from '@/App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import { ScrollProgress } from './components/common'
import { Navbar } from './components/navbar'
import { LanguageProvider } from './i18n'
import './index.css'
import { FooterSection } from './pages/FooterSection'
import { store } from './store'
import { initGA } from './utils/analytics'
import { Provider } from 'react-redux'

initGA()

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <StrictMode>
        <Provider store={store}>
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
        </Provider>
    </StrictMode>
)
