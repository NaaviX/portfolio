import '@fontsource/courgette/latin-400.css'
import '@fontsource/kaushan-script/latin-400.css'
import { Box } from '@mui/material'
import HeaderContent from '../components/header/components/HeaderContent'
import Particles from '../components/particles/Particles'
import { headerOptions } from '../components/particles/particles.config'

const Header = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    minHeight: '100vh',
                    position: 'absolute',
                }}
            >
                <Particles
                    id='header-particles'
                    particlesOptions={headerOptions}
                />
            </Box>
            <HeaderContent />
        </Box>
    )
}

export default Header
