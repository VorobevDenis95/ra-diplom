import {
  createBrowserRouter,
} from 'react-router-dom';
import Root from '../components/Root/Root';
import Contacts from '../components/Contacts/Contacts';
import About from '../components/About/About';
import AboutCard from '../components/CardProduct/AboutCard';
import Main from '../components/Main/Main';
import { CatalogWithSearch } from '../components/Catalog/CatalogWithSearch';
import Cart from '../components/Cart/Cart';


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      // errorElement: <FullErrorPage />,
      children: [
        {
          path: '/',
          element: <Main/>
        },
        {
          path: '/catalog',
          element: <CatalogWithSearch/>
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
        },
        {
          path: '/cart',
          element: <Cart/>
        }
      ]
    }
])