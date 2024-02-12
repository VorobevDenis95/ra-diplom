import {
  createBrowserRouter,
} from 'react-router-dom';
import Root from '../components/Root/Root';
import Contacts from '../components/Contacts/Contacts';
import About from '../components/About/About';
import { FullErrorPage } from '../components/HOC/FullErrorPage';
import Besselers from '../components/Bestsellers/Bestsellers';
import AboutCard from '../components/CardProduct/AboutCard';
import Catalog from '../components/Catalog/Catalog';
import Categories from '../components/Categories/Categories';
import Main from '../components/Main/Main';
import { CatalogWithSearch } from '../components/Catalog/CatalogWithSearch';
import Search from '../components/Search/Search';
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