import { ChakraProps, Heading } from '@chakra-ui/react'

interface TitleProps {
    children: React.ReactNode
    sx?: ChakraProps['sx']
}

export const Title = (props: TitleProps) => {
    const { children, sx } = props
    return (
        <Heading
            as='h2'
            fontWeight='500'
            letterSpacing='wider'
            color='primary-light'
            fontSize='xl'
            sx={sx}
        >
            {children}
        </Heading>
    )
}
