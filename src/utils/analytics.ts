import ReactGA from 'react-ga4'

// Initialisation de GA4
export const initGA = () => {
    ReactGA.initialize('G-D3DBPBNG8Y') // Remplacez par votre ID de mesure GA4
}

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview' })
}

export const logEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category,
        action,
        label,
    })
}

export const logError = (error: Error) => {
    ReactGA.event({
        category: 'Error',
        action: error.message,
        label: error.stack,
    })
}
