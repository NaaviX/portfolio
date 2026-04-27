const SEND_EMAIL_API_URL = 'https://antoine-legrand.dev/api/'

export type ContactPayload = {
    name: string
    email: string
    subject: string
    message: string
}

export type ContactResult =
    | { ok: true }
    | { ok: false; reason: 'network' | 'server' }

export const useContact = () => {
    async function sendContact(payload: ContactPayload): Promise<ContactResult> {
        try {
            const response = await fetch(SEND_EMAIL_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                redirect: 'follow',
            })
            if (!response.ok) return { ok: false, reason: 'server' }
            return { ok: true }
        } catch {
            return { ok: false, reason: 'network' }
        }
    }

    return { sendContact }
}
