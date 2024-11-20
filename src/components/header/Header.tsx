import { Container, Flex } from '@chakra-ui/react'
import '@fontsource/space-grotesk/400.css'
import { HeaderContent } from './components/HeaderContent'
import { HeaderTitle } from './components/HeaderTitle'

export const Header = () => {
    return (
        <Container maxW='container.lg' textAlign='center'>
            <Flex
                h='100dvh'
                py='10dvh'
                direction='column'
                justify='space-evenly'
            >
                <HeaderTitle />
                <HeaderContent />
            </Flex>
        </Container>
    )
}
