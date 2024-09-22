import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Signup from './pages/authentication/Signup.jsx';
import Signin from './pages/authentication/Signin.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <h1>This is About page</h1>,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/signin',
        element: <Signin />,
    },
]);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={routes} />);
