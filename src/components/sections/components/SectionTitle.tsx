import { Divider, Typography } from '@mui/material'
import { isMobile } from 'react-device-detect'

const SectionTitle = ({ children }: { children?: string }) => {
    if (children === undefined) {
        return <></>
    }
    if (isMobile) {
        return (
            <Typography variant='h2' textAlign='center'>
                {children}
            </Typography>
        )
    }
    return (
        <Divider sx={{ mb: '30px', width: '70%', zIndex: '1000' }}>
            <Typography variant='h2' textAlign='center' marginInline={10}>
                {children}
            </Typography>
        </Divider>
    )
}

export default SectionTitle
