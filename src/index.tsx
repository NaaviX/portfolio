import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import Appbar from './components/appbar/Appbar'
import Footer from './sections/Footer'
import appTheme from './theme'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Box className='app'>
                <Appbar />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </Box>
        </ThemeProvider>
    </React.StrictMode>
)
