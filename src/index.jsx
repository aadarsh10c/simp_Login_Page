import ReactDOM from 'react-dom/client';
import Test from './test.jsx';
import StyledComponents from './components/Slider.jsx';
import Slider from '@mui/material/Slider';

function App() {
    return (
        <>
            <h1>Rick and Morty</h1>
            <Test />
            <Slider/>
            <StyledComponents />
        </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
