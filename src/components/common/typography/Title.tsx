import { Heading, HeadingProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export const Title = (props: PropsWithChildren<HeadingProps>) => {
    const { children, ...headingProps } = props
    return (
        <Heading
            as='h2'
            fontWeight='500'
            letterSpacing='wider'
            color='primary-light'
            fontSize='xl'
            {...headingProps}
        >
            {children}
        </Heading>
    )
}
