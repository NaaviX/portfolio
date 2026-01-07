import { Header } from '@/components/header'
import { particlesData } from '@/components/particles'
import { lazy, Suspense, useEffect, useState } from 'react'

const Particles = lazy(() =>
    import('@/components/particles').then((m) => ({ default: m.Particles }))
)

export const HeaderSection = () => {
    const [showParticles, setShowParticles] = useState(false)

    useEffect(() => {
        // Defer particles until after initial paint using requestIdleCallback
        const idleCallback =
            'requestIdleCallback' in window
                ? window.requestIdleCallback
                : (cb: () => void) => setTimeout(cb, 1)

        const cancelCallback =
            'cancelIdleCallback' in window
                ? window.cancelIdleCallback
                : (id: number) => clearTimeout(id)

        const id = idleCallback(() => setShowParticles(true))
        return () => cancelCallback(id)
    }, [])

    return (
        <div className='relative min-h-screen'>
            <div className='absolute inset-0 overflow-hidden'>
                {showParticles && (
                    <Suspense fallback={null}>
                        <Particles
                            id='header-particles'
                            particlesOptions={particlesData}
                        />
                    </Suspense>
                )}
            </div>
            <Header />
        </div>
    )
}
