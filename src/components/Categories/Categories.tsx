import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCategories } from '../../redux/slice/catalogSlice';
import Category from './Category';
import { PropsCategory } from './Category';

const Categories = () => {
    const {categories} = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    return (
      
      <ul className="catalog-categories">
        {categories.map((el: PropsCategory) => (
          <Category key={el.id} item={el} />
        )) }
      </ul> 
      



  
            
  )
}

export default Categories;