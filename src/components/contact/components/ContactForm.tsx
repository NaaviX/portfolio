import { type ContactPayload, useContact } from '@/hooks/useContact'
import { useLanguage } from '@/i18n'
import { EASE_OUT_QUART } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
    AlertCircle,
    Check,
    Loader2,
    Mail,
    MessageSquare,
    Send,
    User,
} from 'lucide-react'
import { useState } from 'react'

const inputClasses =
    'w-full px-4 py-3 text-base rounded-xl border bg-bg-hover/30 backdrop-blur-sm focus:outline-none transition-colors duration-300 placeholder:text-primary-dark/50'
const labelClasses =
    'flex items-center gap-2 mb-2 text-sm font-medium text-primary-light/80'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Field = 'name' | 'email' | 'subject' | 'message'
type Errors = Partial<Record<Field, string>>

const validate = (
    p: ContactPayload,
    msgs: {
        nameRequired: string
        emailRequired: string
        emailInvalid: string
        subjectRequired: string
        messageRequired: string
    }
): Errors => {
    const errors: Errors = {}
    if (!p.name.trim()) errors.name = msgs.nameRequired
    if (!p.email.trim()) errors.email = msgs.emailRequired
    else if (!EMAIL_RE.test(p.email.trim())) errors.email = msgs.emailInvalid
    if (!p.subject.trim()) errors.subject = msgs.subjectRequired
    if (!p.message.trim()) errors.message = msgs.messageRequired
    return errors
}

export const ContactForm = () => {
    const { t } = useLanguage()
    const { sendContact } = useContact()
    const reduce = useReducedMotion() ?? false

    const [errors, setErrors] = useState<Errors>({})
    const [submitError, setSubmitError] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const inputCls = (field: Field) =>
        cn(
            inputClasses,
            errors[field]
                ? 'border-rose-400/70 focus:border-rose-300 focus:ring-2 focus:ring-rose-300/30'
                : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/40'
        )

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitError(null)
        const data = new FormData(e.currentTarget)
        const payload: ContactPayload = {
            name: String(data.get('name') ?? ''),
            email: String(data.get('email') ?? ''),
            subject: String(data.get('subject') ?? ''),
            message: String(data.get('message') ?? ''),
        }
        const found = validate(payload, t.contact.errors)
        setErrors(found)
        if (Object.keys(found).length > 0) {
            const first = Object.keys(found)[0]
            document.getElementById(first)?.focus()
            return
        }
        setIsSubmitting(true)
        const result = await sendContact(payload)
        setIsSubmitting(false)
        if (result.ok) {
            setIsSent(true)
            return
        }
        setSubmitError(t.contact.errors.generic)
    }

    const onFieldChange = (field: Field) => () => {
        if (!errors[field]) return
        setErrors((prev) => {
            const { [field]: _removed, ...rest } = prev
            return rest
        })
    }

    if (isSent) {
        return (
            <SuccessPanel
                title={t.contact.success.title}
                body={t.contact.success.body}
                again={t.contact.success.again}
                onAgain={() => {
                    setIsSent(false)
                    setErrors({})
                }}
                reduce={reduce}
            />
        )
    }

    return (
        <motion.form
            noValidate
            onSubmit={onSubmit}
            className='w-full max-w-2xl px-4 md:px-0'
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_OUT_QUART }}
            aria-busy={isSubmitting}
        >
            <div className='relative p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-br from-bg-hover/40 to-bg/40 backdrop-blur-md'>
                <div className='relative space-y-6'>
                    <FieldRow
                        id='name'
                        label={t.contact.name}
                        icon={<User className='w-4 h-4' />}
                        error={errors.name}
                    >
                        <input
                            name='name'
                            id='name'
                            placeholder={t.contact.namePlaceholder}
                            className={inputCls('name')}
                            aria-invalid={!!errors.name}
                            aria-describedby={
                                errors.name ? 'name-error' : undefined
                            }
                            onChange={onFieldChange('name')}
                        />
                    </FieldRow>

                    <FieldRow
                        id='email'
                        label={t.contact.email}
                        icon={<Mail className='w-4 h-4' />}
                        error={errors.email}
                    >
                        <input
                            name='email'
                            id='email'
                            type='email'
                            inputMode='email'
                            autoComplete='email'
                            placeholder={t.contact.emailPlaceholder}
                            className={inputCls('email')}
                            aria-invalid={!!errors.email}
                            aria-describedby={
                                errors.email ? 'email-error' : undefined
                            }
                            onChange={onFieldChange('email')}
                        />
                    </FieldRow>

                    <FieldRow
                        id='subject'
                        label={t.contact.subject}
                        icon={<MessageSquare className='w-4 h-4' />}
                        error={errors.subject}
                    >
                        <input
                            name='subject'
                            id='subject'
                            placeholder={t.contact.subjectPlaceholder}
                            className={inputCls('subject')}
                            aria-invalid={!!errors.subject}
                            aria-describedby={
                                errors.subject ? 'subject-error' : undefined
                            }
                            onChange={onFieldChange('subject')}
                        />
                    </FieldRow>

                    <FieldRow
                        id='message'
                        label={t.contact.message}
                        icon={<MessageSquare className='w-4 h-4' />}
                        error={errors.message}
                    >
                        <textarea
                            name='message'
                            id='message'
                            rows={5}
                            placeholder={t.contact.messagePlaceholder}
                            className={cn(inputCls('message'), 'resize-none')}
                            aria-invalid={!!errors.message}
                            aria-describedby={
                                errors.message ? 'message-error' : undefined
                            }
                            onChange={onFieldChange('message')}
                        />
                    </FieldRow>

                    <AnimatePresence initial={false}>
                        {submitError && (
                            <motion.div
                                key='submit-error'
                                role='alert'
                                initial={
                                    reduce ? false : { opacity: 0, y: -4 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.3,
                                    ease: EASE_OUT_QUART,
                                }}
                                className='flex items-start gap-2 rounded-lg border border-rose-400/40 bg-rose-400/10 px-3 py-2 text-sm text-rose-100/90'
                            >
                                <AlertCircle className='w-4 h-4 mt-0.5 shrink-0 text-rose-300' />
                                <span>{submitError}</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className='pt-2 space-y-3'>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className='group relative w-full py-4 px-6 rounded-xl border border-primary bg-primary/10 text-primary-light font-medium overflow-hidden transition-colors duration-300 hover:bg-primary/20 hover:border-primary-light focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary-light disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            <span className='relative flex items-center justify-center gap-2'>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className='w-5 h-5 animate-spin' />
                                        {t.contact.sending}
                                    </>
                                ) : (
                                    <>
                                        {t.contact.send}
                                        <Send className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
                                    </>
                                )}
                            </span>
                        </button>
                        <p className='text-center text-xs text-primary-light/45 leading-relaxed'>
                            {t.contact.helper}
                        </p>
                    </div>
                </div>
            </div>
        </motion.form>
    )
}

const FieldRow = (props: {
    id: string
    label: string
    icon: React.ReactNode
    error?: string
    children: React.ReactNode
}) => {
    const { id, label, icon, error, children } = props
    return (
        <div>
            <label htmlFor={id} className={labelClasses}>
                {icon}
                {label}
            </label>
            {children}
            {error && (
                <p
                    id={`${id}-error`}
                    role='alert'
                    className='mt-1.5 text-xs text-rose-200/90'
                >
                    {error}
                </p>
            )}
        </div>
    )
}

const SuccessPanel = (props: {
    title: string
    body: string
    again: string
    onAgain: () => void
    reduce: boolean
}) => (
    <motion.div
        role='status'
        aria-live='polite'
        initial={props.reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_QUART }}
        className='w-full max-w-2xl px-4 md:px-0'
    >
        <div className='relative p-8 md:p-10 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-bg/40 backdrop-blur-md'>
            <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/60 text-primary'>
                    <Check className='h-5 w-5' />
                </div>
                <div className='flex-1'>
                    <p className='font-heading text-xl md:text-2xl font-semibold tracking-tight text-primary-light'>
                        {props.title}
                    </p>
                    <p className='mt-1 text-primary-light/70 leading-relaxed'>
                        {props.body}
                    </p>
                    <button
                        type='button'
                        onClick={props.onAgain}
                        className='mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-md px-1 -mx-1'
                    >
                        {props.again}
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
)
