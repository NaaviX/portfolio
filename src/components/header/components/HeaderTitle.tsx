import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { isDesktop } from 'react-device-detect'
import { userData } from '../../user/user.data'

const HeaderTitle = () => {
    return (
        <Box id='repulse-div'>
            <motion.div
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
                viewport={{ once: true }}
            >
                <Typography
                    component='h1'
                    sx={{
                        fontWeight: 300,
                        fontSize: isDesktop ? 95 : 40,
                        color: '#b6ecf7',
                        textAlign: 'center',
                    }}
                    fontFamily='Space Grotesk'
                >
                    {userData.firstname} {userData.lastname}
                </Typography>
            </motion.div>
        </Box>
    )
}

export default HeaderTitle
