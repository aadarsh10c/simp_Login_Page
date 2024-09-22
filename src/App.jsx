import { themeOptions } from './theme.js';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Signin from './pages/authentication/Signin.jsx';

export default function App() {
    return (
        <ThemeProvider theme={themeOptions}>
            <CssBaseline />
            <Container>
                <Signin />
            </Container>
        </ThemeProvider>
    );
}
