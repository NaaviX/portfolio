import { Container, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { SectionTitle } from './SectionTitle'

interface SectionLayoutProps {
    children: ReactNode
    title?: string
}

export const SectionLayout = (props: SectionLayoutProps) => {
    const { children, title } = props
    return (
        <Container maxW='container.xl'>
            <Flex direction='column' placeItems='center'>
                <SectionTitle text={title} />

                {children}
            </Flex>
        </Container>
    )
}
