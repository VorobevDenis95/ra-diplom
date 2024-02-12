import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchAddCatalog } from '../../redux/slice/catalogSlice';

const BtnAdd = () => {
    const dispatch = useDispatch();
    const {cards, idActiveCategory} = useSelector(state => state.catalog);
    

    return (
        <button onClick={() => dispatch(fetchAddCatalog({id: idActiveCategory, length: cards.length}))} className="btn btn-outline-primary">Загрузить ещё</button>
    )
}

export default BtnAdd;