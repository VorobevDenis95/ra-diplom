import { ReactNode, useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/redux-hook';
import { fetchCatalog, fetchSearch } from '../../redux/slice/catalogSlice';
import Categories from '../Categories/Categories';
import Product from '../Product/Product';
import BtnAdd from './BtnAdd';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

interface PropsCatalog {
  children?: ReactNode;
}


const Catalog = ({children}:PropsCatalog) => {
    const {cards, btnAdd, idActiveCategory, search, error} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    const location = useLocation()

    const {status} = useAppSelector(state => state.catalog);

    useEffect(() => {
        dispatch(fetchCatalog(idActiveCategory))
    }, [idActiveCategory]);

    useEffect(() => {
      dispatch(fetchSearch(search));
    }, [location])

    return (
      <>
        <section className="catalog">
        <h2 className='text-center'>Каталог</h2>
   
        {status=== 'resolver' && children}
        <Categories />
        {status === 'loading' && <Preloader/>}
        {error && <h2>{error}</h2>}
        <div className="row">
        {status !== 'loading' && !error && cards.map(el => (
          <Product key={el.id} item={el} />
        ))}
        </div>
        {
          status !== 'loading' && !error && btnAdd && <BtnAdd />

        }
        </section>
      </>
  )
}

export default Catalog;