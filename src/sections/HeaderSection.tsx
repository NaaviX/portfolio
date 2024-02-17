import { Header } from '@/components/header'
import { Particles, particlesData } from '@/components/particles'
import { Box } from '@chakra-ui/react'

export const HeaderSection = () => {
    return (
        <Box>
            <Box w='100%' minH='100vh' pos='absolute'>
                <Particles
                    id='header-particles'
                    particlesOptions={particlesData}
                />
            </Box>
            <Header />
        </Box>
    )
}
