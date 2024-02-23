import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/redux-hook';
import { fetchCategories } from '../../redux/slice/catalogSlice';
import Category from './Category';
import { PropsCategory } from '../../types/CategoryInterface';


const Categories = () => {
    const {categories} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

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