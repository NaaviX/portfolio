import { useContact } from '@/hooks/useContact'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Loader2, Mail, MessageSquare, Send, User } from 'lucide-react'
import { useState } from 'react'

const inputClasses =
    'w-full px-4 py-3 text-base rounded-xl border border-border bg-bg-hover/30 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 placeholder:text-primary-dark/50'

const labelClasses =
    'flex items-center gap-2 mb-2 text-sm font-medium text-primary-light/80'

const BORDER_FOCUSED = 'border-primary'

const formVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

export const ContactForm = () => {
    const { handleFormSubmit } = useContact()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true)
        try {
            await handleFormSubmit(e)
            const form = e.target as HTMLFormElement
            form.reset()
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.form
            noValidate
            onSubmit={onSubmit}
            className='w-full max-w-2xl px-4 md:px-0'
            variants={formVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
            <motion.div
                className='relative p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-br from-bg-hover/40 to-bg/40 backdrop-blur-md'
                variants={itemVariants}
            >
                <div
                    className='absolute inset-0 rounded-2xl opacity-50 pointer-events-none'
                    style={{
                        background:
                            'radial-gradient(circle at 50% 0%, var(--color-primary)/10, transparent 50%)',
                    }}
                />

                <div className='relative space-y-6'>
                    <motion.div variants={itemVariants}>
                        <label htmlFor='name' className={labelClasses}>
                            <User className='w-4 h-4' />
                            Nom
                        </label>
                        <motion.div
                            animate={{
                                scale: focusedField === 'name' ? 1.01 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <input
                                name='name'
                                id='name'
                                placeholder='Votre nom'
                                className={cn(
                                    inputClasses,
                                    focusedField === 'name' && BORDER_FOCUSED
                                )}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor='email' className={labelClasses}>
                            <Mail className='w-4 h-4' />
                            Email
                        </label>
                        <motion.div
                            animate={{
                                scale: focusedField === 'email' ? 1.01 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <input
                                name='email'
                                id='email'
                                type='email'
                                placeholder='votre@email.com'
                                className={cn(
                                    inputClasses,
                                    focusedField === 'email' && BORDER_FOCUSED
                                )}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor='subject' className={labelClasses}>
                            <MessageSquare className='w-4 h-4' />
                            Sujet
                        </label>
                        <motion.div
                            animate={{
                                scale: focusedField === 'subject' ? 1.01 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <input
                                name='subject'
                                id='subject'
                                placeholder='Le sujet de votre message'
                                className={cn(
                                    inputClasses,
                                    focusedField === 'subject' && BORDER_FOCUSED
                                )}
                                onFocus={() => setFocusedField('subject')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label htmlFor='message' className={labelClasses}>
                            <MessageSquare className='w-4 h-4' />
                            Message
                        </label>
                        <motion.div
                            animate={{
                                scale: focusedField === 'message' ? 1.01 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <textarea
                                name='message'
                                id='message'
                                rows={5}
                                placeholder='Votre message...'
                                className={cn(
                                    inputClasses,
                                    'resize-none',
                                    focusedField === 'message' && BORDER_FOCUSED
                                )}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className='pt-2'>
                        <motion.button
                            type='submit'
                            disabled={isSubmitting}
                            className='group relative w-full py-4 px-6 rounded-xl border border-primary bg-primary/10 text-primary-light font-medium overflow-hidden transition-all duration-300 hover:bg-primary/20 hover:border-primary-light disabled:opacity-50 disabled:cursor-not-allowed'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span
                                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                                style={{
                                    background:
                                        'radial-gradient(circle at 50% 50%, var(--color-primary)/20, transparent 70%)',
                                }}
                            />
                            <span className='relative flex items-center justify-center gap-2'>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className='w-5 h-5 animate-spin' />
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        Envoyer le message
                                        <Send className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.form>
    )
}
