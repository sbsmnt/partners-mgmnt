import { createMuiTheme } from '@material-ui/core/styles';

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = createMuiTheme({
    palette: {
        type: isDark ? 'dark' : 'light',
        primary: {
            light: '#66e0ff',
            main: '#00aeef',
            dark: '#007fbc',
            contrastText: '#fafafa',
        },
        secondary: {
            light: '#62727b',
            main: '#37474f',
            dark: '#102027',
            contrastText: '#fff',
        },
        background: {
            default: isDark ? '#303030' : "#f1f1f1"
        },
    }
});

export default theme;