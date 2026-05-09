import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    title: string
    isOpen: boolean
    onClose: () => void
}

export const Modal = (props: ModalProps) => {
    const { children, title, isOpen, onClose } = props

    return (
        <DialogPrimitive.Root
            open={isOpen}
            onOpenChange={(open) => !open && onClose()}
        >
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay
                    className='fixed inset-0 z-50 bg-[rgba(8,44,54,0.4)] backdrop-blur-sm'
                    style={{
                        boxShadow:
                            '0px 0px 6px 2px rgba(4,84,104, 0.1), 0px 0px 15px 4px rgba(4,84,104, 0.2), 0 0 0 1px rgba(4,84,104, 0.2)',
                    }}
                    data-lenis-prevent
                />
                <DialogPrimitive.Content
                    className='fixed left-1/2 top-1/2 z-50 w-[calc(100vw-1.5rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-[rgba(8,44,54,0.88)] p-4 shadow-[0_0_30px_rgba(0,162,199,0.14),0_0_80px_rgba(0,162,199,0.08),inset_0_1px_0_rgba(182,236,247,0.08)] sm:p-6'
                    data-lenis-prevent
                >
                    <DialogPrimitive.Title className='pr-10 font-mono text-[0.7rem] font-normal uppercase tracking-[0.2em] text-primary-light/70'>
                        {title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Close className='absolute right-4 top-4 rounded-full border border-border-subtle p-2 opacity-70 transition-[border-color,opacity] duration-300 hover:border-border-hover hover:opacity-100 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'>
                        <X className='h-4 w-4 text-primary-light' />
                        <span className='sr-only'>Close</span>
                    </DialogPrimitive.Close>
                    <div className='mt-4'>{children}</div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
}
