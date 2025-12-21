import { Fade } from '@/components/common/effects/Fade'
import { useContact } from '@/hooks/useContact'
import { MdSend } from 'react-icons/md'

export const ContactForm = () => {
    const { handleFormSubmit } = useContact()
    return (
        <form
            noValidate
            onSubmit={handleFormSubmit}
            className='w-full md:w-[70%] min-h-[50vh]'
        >
            <Fade>
                <div className='mt-12 h-full flex flex-col gap-4'>
                    <div>
                        <label
                            htmlFor='subject'
                            className='block mb-2 text-sm font-medium'
                        >
                            Sujet
                        </label>
                        <input
                            name='subject'
                            id='subject'
                            className='w-full px-4 py-3 text-lg rounded-md border border-border bg-transparent focus:outline-none focus:border-border-hover'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='message'
                            className='block mb-2 text-sm font-medium'
                        >
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            rows={4}
                            className='w-full px-4 py-3 text-lg rounded-md border border-border bg-transparent focus:outline-none focus:border-border-hover resize-none'
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='mt-4 px-6 py-3 text-lg bg-bg hover:bg-bg-hover border border-border rounded-md inline-flex items-center gap-2 transition-colors'
                >
                    Envoyer
                    <MdSend />
                </button>
            </Fade>
        </form>
    )
}
