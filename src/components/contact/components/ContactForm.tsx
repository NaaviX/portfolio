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
import toast from 'react-hot-toast'
import { MdSend } from 'react-icons/md'

const SEND_EMAIL_API_URL = 'https://antoine-legrand.dev/backend/send-email'

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const subject = data.get('subject')
    const message = data.get('message')

    if (!subject && !message) {
        return
    }

    try {
        const response = await fetch(SEND_EMAIL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, message }),
        })

        if (!response.ok) {
            toast.error("L'envoi a échoué")
            throw new Error("L'envoi a échoué")
        }

        const data = await response.json()
        toast.success("L'email a bien été envoyé")
        return data
    } catch (error) {
        throw new Error((error as Error).message)
    }
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
