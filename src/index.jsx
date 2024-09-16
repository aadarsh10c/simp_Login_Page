import ReactDOM from 'react-dom/client';
import { themeOptions } from './theme.js';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Signup from './pages/Signup.jsx';

function App() {
    return (
        <ThemeProvider theme={themeOptions}>
            <CssBaseline />
            <Container>
                <Signup/>
            </Container>
        </ThemeProvider>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
