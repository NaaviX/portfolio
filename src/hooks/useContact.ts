import { FormEvent } from 'react'
import toast from 'react-hot-toast'

const SEND_EMAIL_API_URL = 'https://antoine-legrand.dev/backend/'

export const useContact = () => {
    async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
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
                redirect: 'follow',
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

    return {
        handleFormSubmit,
    }
}
