import { Container } from '@mui/material'
import React from 'react'
import SectionTitle from './components/SectionTitle'

const SectionLayout = ({
    children,
    title,
}: {
    children: React.ReactNode
    title?: string
}) => {
    return (
        <Container
            maxWidth='xl'
            className='sectionContainer'
            sx={{
                py: '100px',
                display: 'flex',
                flexDirection: 'column',
                placeItems: 'center',
            }}
        >
            <SectionTitle>{title}</SectionTitle>

            {children}
        </Container>
    )
}

export default SectionLayout
