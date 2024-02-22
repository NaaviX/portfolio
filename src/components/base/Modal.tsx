import {
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react'
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
        <ChakraModal isOpen={isOpen} onClose={onClose} size='xl'>
            <div data-lenis-prevent>
                <ModalOverlay
                    bg='rgba(8, 44, 54, 0.4)'
                    backdropFilter='blur(3px)'
                    boxShadow='0px 0px 6px 2px rgba(4,84,104, 0.1), 0px 0px 15px 4px rgba(4,84,104, 0.2), 0 0 0 1px rgba(4,84,104, 0.2)'
                />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </div>
        </ChakraModal>
    )
}
