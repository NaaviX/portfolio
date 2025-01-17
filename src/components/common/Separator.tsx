import { Box, Center, Divider } from '@chakra-ui/react'

interface SeparatorProps {
    children?: React.ReactNode
}

export const Separator = (props: SeparatorProps) => {
    const { children } = props
    if (children) {
        return (
            <Box
                role='separator'
                sx={{
                    margin: '0 0 0 30px',
                    flexShrink: 0,
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                    borderWidth: 0,
                    borderStyle: 'none',
                    borderImage: 'none',
                    width: '70%',
                    zIndex: 100,
                    marginBottom: '3rem',
                }}
                _before={{
                    width: '100%',
                    borderTop: 'thin solid',
                    content: '""',
                    alignSelf: 'center',
                }}
                _after={{
                    width: '100%',
                    borderTop: 'thin solid',
                    content: '""',
                    alignSelf: 'center',
                }}
            >
                <Center px='4'>{children}</Center>
            </Box>
        )
    }
    return <Divider />
}
