import { Fade } from '@/components/base/effects/Fade'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Textarea,
} from '@chakra-ui/react'
import { FormEvent } from 'react'
import { MdSend } from 'react-icons/md'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const email = 'portfolio.antoinelegrand@gmail.com'
    const subject = data.get('subject')
    const message = data.get('message')

    window.location.href =
        'mailto:' + email + '?subject=' + subject + '&body=' + message
}

export const ContactForm = () => {
    return (
        <Box
            as='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ width: { base: '100%', md: '70%' }, minHeight: '50vh' }}
        >
            <Fade>
                <Grid mt='3rem' h='100%' gap='1rem'>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <FormLabel htmlFor='subject'>Sujet</FormLabel>
                            <Input size='lg' name='subject' w='full' />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl>
                            <FormLabel htmlFor='message'>Message</FormLabel>
                            <Textarea
                                size='lg'
                                name='message'
                                w='full'
                                rows={4}
                            />
                        </FormControl>
                    </GridItem>
                </Grid>
                <Button
                    type='submit'
                    mt='4'
                    size='lg'
                    rightIcon={<MdSend />}
                    background='#082c36'
                    _hover={{ background: '#003848 !important' }}
                >
                    Envoyer
                </Button>
            </Fade>
        </Box>
    )
}
