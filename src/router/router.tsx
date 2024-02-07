import {
  createBrowserRouter,
} from 'react-router-dom';
import Root from '../components/Root/Root';
import Contacts from '../components/Contacts/Contacts';
import About from '../components/About/About';
import { FullErrorPage } from '../components/HOC/FullErrorPage';
import Besselers from '../components/Bestsellers/Bestsellers';
import AboutCard from '../components/CardProduct/AboutCard';


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      // errorElement: <FullErrorPage />,
      children: [
        {
          path: '/',
          element: <Besselers/>
        },
        {
          path: '/catalog',
          element: <div>12</div>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contacts',
          element: <Contacts/>,
        },
        {
          path: '/products/:id',
          element: <AboutCard />
        }
      ]
    }
])