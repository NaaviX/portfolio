import { Header } from '@/components/header'
import { Particles, particlesData } from '@/components/particles'

export const HeaderSection = () => {
    return (
        <div>
            <div className='w-full min-h-screen absolute'>
                <Particles
                    id='header-particles'
                    particlesOptions={particlesData}
                />
            </div>
            <Header />
        </div>
    )
}
