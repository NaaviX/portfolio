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

function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    })
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
                    <GridItem colSpan={{ base: 12, sm: 6 }}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='fullName'>Nom</FormLabel>
                            <Input
                                size='lg'
                                autoComplete='full-name'
                                name='fullName'
                                required
                                width='100%'
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, sm: 6 }}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='email'>Adresse email</FormLabel>
                            <Input
                                size='lg'
                                autoComplete='email'
                                name='email'
                                w='full'
                            />
                        </FormControl>
                    </GridItem>
                    <GridItem colSpan={12}>
                        <FormControl isRequired>
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
                    variant='outline'
                    mt='4'
                    ml='30%'
                    w='40%'
                    size='lg'
                >
                    Envoyer
                </Button>
            </Fade>
        </Box>
    )
}
