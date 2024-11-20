import { Heading, HeadingProps } from '@chakra-ui/react'

interface SubtitleProps {
    children: React.ReactNode
}

export const Subtitle = (props: SubtitleProps & HeadingProps) => {
    const { children, ...headingProps } = props
    return (
        <Heading
            as='h3'
            fontSize='md'
            color='primary-dark'
            fontWeight='400'
            letterSpacing='widest'
            {...headingProps}
        >
            {children}
        </Heading>
    )
}
