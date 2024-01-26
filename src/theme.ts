import { Theme, ThemeOptions, createTheme } from '@mui/material'

/*
cyan :
  App background: #0b161a;
  Subtle background: #101b20;
  UI element background: #082c36;
  Hovered UI element background: #003848;
  Active / Selected UI element background: #004558;
  Subtle borders and separators: #045468;
  UI element border and focus rings: #12677e;
  Hovered UI element border: #11809c;
  Solid backgrounds: #00a2c7;
  Hovered solid backgrounds: #23afd0;
  Low-contrast text: #4ccce6;
  High-contrast text: #b6ecf7;
*/
const importantColor: string = ' !important'

const uiBackgroundColor: string = '#082c36' + importantColor
const hoveredUiBackgroundColor: string = '#003848' + importantColor

const borderColor: string = '#12677e' + importantColor
const hoveredBorderColor: string = '#11809c' + importantColor

const primaryLightColor: string = '#b6ecf7' + importantColor
const primaryDarkColor: string = '#4ccce6' + importantColor
const secondaryMainColor: string = '#CDC181' + importantColor
const appTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            dark: primaryDarkColor,
            main: primaryLightColor,
            light: primaryLightColor,
        },
        secondary: {
            main: secondaryMainColor,
        },
        background: {
            paper: 'rgba(8, 44, 54, 0.4)',
            default: '#101b20',
        },
        divider: borderColor,
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '& fieldset': {
                        borderColor: borderColor,
                        transition: '0.2s !important',
                    },
                    '&:hover fieldset': {
                        borderColor: hoveredBorderColor,
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: hoveredUiBackgroundColor,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: uiBackgroundColor,
                    '&:hover': {
                        backgroundColor: hoveredUiBackgroundColor,
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(2px)',
                    color: primaryLightColor,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    letterSpacing: 0.8,
                    color: '#ffffff',
                    backgroundColor: hoveredUiBackgroundColor,
                },
            },
        },
    },
    typography: {
        h1: {
            textAlign: 'center',
            letterSpacing: 1.1,
            fontWeight: 400,
            fontSize: 24,
            color: primaryDarkColor,
        },
        h2: {
            fontWeight: 600,
            letterSpacing: 1.3,
            fontSize: 24,
            color: primaryLightColor,
        },
        subtitle1: {
            fontSize: 16,
            color: primaryDarkColor,
            fontWeight: '700',
            letterSpacing: '0.07rem',
        },
        body1: {
            textAlign: 'justify',
            fontSize: 16,
            color: primaryLightColor,
        },
        body2: {
            textAlign: 'justify',
            fontSize: 16,
            color: primaryDarkColor,
        },
        button: {
            fontWeight: 'bold',
            paddingBlock: 2,
            paddingInline: 8,
        },
    },
} as ThemeOptions)

export default appTheme
