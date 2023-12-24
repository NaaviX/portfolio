import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
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
                        letterSpacing: 1.4,
                        fontWeight: 300,
                        fontSize: 95,
                        color: '#b6ecf7',
                    }}
                    fontFamily='courgette'
                >
                    {userData.firstname} {userData.lastname}
                </Typography>
            </motion.div>
        </Box>
    )
}

export default HeaderTitle
