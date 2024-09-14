import ReactDOM from 'react-dom/client';
import Test from './test.jsx';

function App() {
    return (
        <>
            <h1>Rick and Morty</h1>
            <Test />
        </>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
