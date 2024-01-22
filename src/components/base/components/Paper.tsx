import { Theme } from '@emotion/react'
import { Paper as MuiPaper, SxProps } from '@mui/material'
import React from 'react'

const Paper = ({
    children,
    sx,
}: {
    children: React.ReactNode
    sx?: SxProps<Theme>
}) => {
    return (
        <MuiPaper
            variant='outlined'
            square={false}
            sx={{
                ...sx,
                position: 'relative',
                zIndex: 10,
                p: '30px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow:
                    '0px 0px 6px 2px rgba(4,84,104, 0.1), 0px 0px 15px 4px rgba(4,84,104, 0.2), 0 0 0 1px rgba(4,84,104, 0.2)',
            }}
        >
            {children}
        </MuiPaper>
    )
}

export default Paper
