import { useEffect, useState } from 'react'

// True when the device has a precise pointer (mouse, trackpad, stylus).
// False on touch-primary devices, used to skip cursor-bound effects.
// (parallax, spotlight masks) that would mount with no payoff on touch.
export const useFinePointer = (): boolean => {
    const [fine, setFine] = useState(() => {
        if (typeof window === 'undefined') return true
        return window.matchMedia('(pointer: fine)').matches
    })

    useEffect(() => {
        const mql = window.matchMedia('(pointer: fine)')
        const onChange = (e: MediaQueryListEvent) => setFine(e.matches)
        mql.addEventListener('change', onChange)
        return () => mql.removeEventListener('change', onChange)
    }, [])

    return fine
}
