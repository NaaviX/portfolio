import { Heading, HeadingProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Subtitle = (props: PropsWithChildren & HeadingProps) => {
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
