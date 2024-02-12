import { Heading } from '@chakra-ui/react'

interface SubtitleProps {
    children: React.ReactNode
}

export const Subtitle = (props: SubtitleProps) => {
    const { children } = props
    return (
        <Heading
            as='h3'
            fontSize='md'
            color='primary-dark'
            fontWeight='400'
            letterSpacing='widest'
        >
            {children}
        </Heading>
    )
}
