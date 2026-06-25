import * as DialogPrimitive from '@radix-ui/react-dialog'
import { FiX } from 'react-icons/fi'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ModalProps {
    children: ReactNode
    title: string
    isOpen: boolean
    onClose: () => void
    variant?: 'default' | 'gallery'
}

export const Modal = (props: ModalProps) => {
    const { children, title, isOpen, onClose, variant = 'default' } = props
    const isGallery = variant === 'gallery'

    return (
        <DialogPrimitive.Root
            open={isOpen}
            onOpenChange={(open) => !open && onClose()}
        >
            <DialogPrimitive.Portal>
                <DialogPrimitive.Overlay
                    className={cn(
                        'fixed inset-0 z-[1100] backdrop-blur-sm',
                        isGallery
                            ? 'bg-[rgba(3,10,12,0.74)]'
                            : 'bg-[rgba(8,44,54,0.4)]'
                    )}
                    style={{
                        boxShadow:
                            '0px 0px 6px 2px rgba(4,84,104, 0.1), 0px 0px 15px 4px rgba(4,84,104, 0.2), 0 0 0 1px rgba(4,84,104, 0.2)',
                    }}
                    data-lenis-prevent
                />
                <DialogPrimitive.Content
                    className={cn(
                        'fixed left-1/2 top-1/2 z-[1110] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-border-subtle shadow-[0_28px_90px_-58px_rgba(47,199,223,0.55),inset_0_1px_0_rgba(215,245,247,0.08)]',
                        isGallery
                            ? 'flex h-[calc(100dvh-1rem)] max-h-[900px] w-[calc(100vw-1rem)] max-w-[1500px] flex-col rounded-2xl bg-[#071114]/95 p-0'
                            : 'w-[calc(100vw-1.5rem)] max-w-6xl rounded-lg bg-bg-subtle/95 p-4 sm:p-6'
                    )}
                    data-lenis-prevent
                >
                    <DialogPrimitive.Title
                        className={cn(
                            'pr-10 text-sm font-semibold text-primary-light/78',
                            isGallery &&
                                'border-b border-border-subtle/70 px-4 py-3 pr-14 sm:px-5'
                        )}
                    >
                        {title}
                    </DialogPrimitive.Title>
                    <DialogPrimitive.Close
                        className={cn(
                            'absolute rounded-full border border-border-subtle p-2 opacity-70 transition-[border-color,opacity,transform] duration-300 hover:border-border-hover hover:opacity-100 active:translate-y-px focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
                            isGallery
                                ? 'right-3 top-2.5 bg-bg-app/70'
                                : 'right-4 top-4'
                        )}
                    >
                        <FiX className='h-4 w-4 text-primary-light' />
                        <span className='sr-only'>Close</span>
                    </DialogPrimitive.Close>
                    <div
                        className={cn(
                            isGallery
                                ? 'min-h-0 flex-1 overflow-hidden'
                                : 'mt-4'
                        )}
                    >
                        {children}
                    </div>
                </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
    )
}
