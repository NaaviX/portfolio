import { Box, useTheme } from '@chakra-ui/react'

export const TimelineItemSeparator = () => {
    const borderColor = useTheme().__cssMap['colors.border'].value
    const primaryLight = useTheme().__cssMap['colors.primary-light'].value
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: '0 1 0%',
                alignItems: 'center',
            }}
        >
            <span
                style={{
                    width: '2px',
                    backgroundColor: borderColor,
                    height: '0.7rem',
                }}
            />
            <span
                style={{
                    display: 'flex',
                    alignSelf: 'baseline',
                    outlineStyle: 'solid',
                    outlineWidth: '2px',
                    outlineOffset: '4px',
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    boxShadow: 'none',
                    margin: '12px 0px',
                    backgroundColor: primaryLight,
                    outlineColor: borderColor,
                }}
            />
            <span
                style={{
                    width: '2px',
                    backgroundColor: borderColor,
                    flexGrow: '1',
                }}
            />
        </Box>
    )
}
