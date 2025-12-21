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
                    className='fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-bg p-6 shadow-lg'
                    data-lenis-prevent
                >
                    <DialogPrimitive.Title className='text-lg font-medium text-primary-light'>
                        {title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Close className='absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none'>
                        <X className='h-4 w-4 text-primary-light' />
                        <span className='sr-only'>Close</span>
                    </DialogPrimitive.Close>
                    <div className='mt-4'>{children}</div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
}
