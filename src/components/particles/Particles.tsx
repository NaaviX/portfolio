import { useCallback } from 'react'
import { Particles as ReactParticles } from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'

interface ParticlesProps {
    id: string | undefined
    particlesOptions: RecursivePartial<IOptions> | undefined
}

export const Particles = (props: ParticlesProps) => {
    const { id, particlesOptions } = props
    const particlesInit = useCallback(async (engine: Engine) => {
        // Use slim version for 60-70% bundle size reduction
        // Includes: image shapes, links, collisions, bounce, bubble, grab modes
        await loadSlim(engine)
    }, [])

    return (
        <ReactParticles
            id={id}
            style={{
                width: '100%',
                minHeight: '100vh',
                zIndex: 10,
            }}
            init={particlesInit}
            options={particlesOptions}
        />
    )
}
