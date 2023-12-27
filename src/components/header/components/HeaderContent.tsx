import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, Container, IconButton, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import MagneticButton from '../../base/components/MagneticButton'
import Paper from '../../base/components/Paper'
import { userData } from '../../user/user.data'
import HeaderTitle from './HeaderTitle'

const HeaderContent = () => {
    return (
        <Container
            id='header'
            maxWidth='xl'
            sx={{
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <HeaderTitle />
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                    delay: 0.5,
                }}
                viewport={{ once: true }}
            >
                <Paper>
                    <Typography
                        variant='h2'
                        gutterBottom
                        fontFamily='kaushan script'
                        textAlign='center'
                        marginBottom='50px'
                    >
                        {userData.jobTitle} <br />
                        <br />
                        {userData.mainDescription}
                    </Typography>
                    <Box
                        sx={{
                            width: '30%',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <MagneticButton>
                            <IconButton
                                href={userData.linkedin}
                                target='_blank'
                                size='large'
                                sx={{
                                    m: '3px',
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;',
                                }}
                            >
                                <ContactPageOutlinedIcon />
                            </IconButton>
                        </MagneticButton>
                        <MagneticButton>
                            <IconButton
                                href={userData.linkedin}
                                target='_blank'
                                size='large'
                                sx={{
                                    m: '3px',
                                    boxShadow:
                                        'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;',
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </MagneticButton>
                    </Box>
                </Paper>
            </motion.div>
        </Container>
    )
}

export default HeaderContent
