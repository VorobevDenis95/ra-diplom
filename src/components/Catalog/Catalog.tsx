import { ReactNode, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCatalog, fetchCategories, fetchSearch } from '../../redux/slice/catalogSlice';
import Category from './Category';
import Categories from '../Categories/Categories';
import Product from '../Product/Product';
import { fetchAddCatalog } from '../../redux/slice/catalogSlice';
import BtnAdd from './BtnAdd';

interface PropsCatalog {
  children?: ReactNode;
}


const Catalog = ({children}:PropsCatalog) => {
    const {cards, btnAdd, idActiveCategory} = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCatalog(idActiveCategory))
    }, [idActiveCategory]);


    return (
      <>
        <section className="catalog">
        <h2 className='text-center'>Каталог</h2>
        {children}
        <Categories />
        <div className="row">
        {cards.map(el => (
          <Product key={el.id} item={el} />
        ))}
        </div>
        {btnAdd && <BtnAdd />}
        </section>
      </>



  
            
  )
}

export default Catalog;