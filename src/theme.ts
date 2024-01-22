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

const appTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#b6ecf7',
        },
        secondary: {
            main: '#4ccce6',
        },
        background: {
            paper: 'rgba(8, 44, 54, 0.4)',
            default: '#101b20',
        },
        divider: '#045468',
    },
    components: {
        MuiListItemText: {
            styleOverrides: {
                primary: {},
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {},
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderColor: '#12677e',
                    '&:hover': {
                        '& fieldset': { borderColor: '#11809c !important' },
                    },
                },
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&:hover': { backgroundColor: '#003848 !important' },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#003848',
                    '&:hover': { backgroundColor: '#004558 !important' },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(1px)',
                    color: '#b6ecf7',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    letterSpacing: 0.8,
                    color: '#ffffff',
                    backgroundColor: '#004558',
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
            color: '#4ccce6',
        },
        h2: {
            fontWeight: 600,
            letterSpacing: 1.3,
            fontSize: 24,
            color: '#b6ecf7',
        },
        subtitle1: {
            fontSize: 15,
            color: '#4ccce6',
            fontWeight: '700',
            letterSpacing: '0.07rem',
        },
        body1: {
            textAlign: 'justify',
            fontSize: 16,
            color: '#b6ecf7',
        },
        body2: {
            textAlign: 'justify',
            fontSize: 16,
            color: '#4ccce6',
        },
        button: {
            fontWeight: 'bold',
            paddingBlock: 2,
            paddingInline: 8,
        },
    },
} as ThemeOptions)

export default appTheme
