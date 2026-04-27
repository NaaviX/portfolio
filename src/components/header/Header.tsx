import { useEffect } from 'react'
import { HeaderContent } from './components/HeaderContent'
import { HeaderTitle } from './components/HeaderTitle'

const useConsoleGreeting = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return
        const w = window as typeof window & { __alGreeted?: boolean }
        if (w.__alGreeted) return
        w.__alGreeted = true

        const head =
            'color:#00a2c7;font-weight:600;font-size:13px;letter-spacing:0.04em;'
        const body = 'color:#b6ecf7;font-size:12px;line-height:1.6;'
        const meta =
            'color:#4ccce6;font-family:ui-monospace,monospace;font-size:11px;'

        // eslint-disable-next-line no-console
        console.info('%cHi. You found the source.', head)
        // eslint-disable-next-line no-console
        console.info(
            '%cIf you are hiring or have a freelance brief, I would love to hear from you.\nantoine.legrand77@gmail.com',
            body
        )
        // eslint-disable-next-line no-console
        console.info('%cAntoine, Paris', meta)
    }, [])
}

export const Header = () => {
    useConsoleGreeting()

    return (
        <div className='relative'>
            <div className='max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20'>
                <div className='min-h-dvh py-[14dvh] flex flex-col justify-center gap-10 md:gap-14'>
                    <HeaderTitle />
                    <HeaderContent />
                </div>
            </div>
        </div>
    )
}
