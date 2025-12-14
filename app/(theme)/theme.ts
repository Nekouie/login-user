import { createTheme } from '@mui/material/styles';


declare module "@mui/material/styles" {
    interface Palette {
        black: Palette['primary'];
    }
    interface PaletteOptions {
        black?: PaletteOptions['primary'];
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        black: true;
    }
}

declare module "@mui/material/TextField" {
    interface TextFieldPropsColorOverrides {
        black: true;
    }
}



export const theme = createTheme({
    palette: {
        black: {
            main: '#a8a8a1',
        }}});