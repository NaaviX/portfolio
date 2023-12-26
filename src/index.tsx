import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import Appbar from './components/appbar/Appbar'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Footer from './sections/Footer'
import appTheme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
