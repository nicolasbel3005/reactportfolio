import ReactDOM from 'react-dom/client'
//Required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './pages/Contact';
import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

// define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      {
        path: 'about',
        element:<About /> ,
      },
      {
        path: 'contact',
        element:<Contact />,
      },
      {
        path: 'portfolio',
        element:<Portfolio />

      },
      {
        path: 'resume',
        element:<Resume />,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);