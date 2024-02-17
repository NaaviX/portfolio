import { useCallback } from 'react'
import { Particles as ReactParticles } from 'react-particles'
import { loadFull } from 'tsparticles'
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'

interface ParticlesProps {
    id: string | undefined
    particlesOptions: RecursivePartial<IOptions> | undefined
}

export const Particles = (props: ParticlesProps) => {
    const { id, particlesOptions } = props
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
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
