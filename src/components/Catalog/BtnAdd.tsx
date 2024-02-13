import {useDispatch, useSelector} from 'react-redux';
import { fetchAddCatalog } from '../../redux/slice/catalogSlice';
import Preloader from '../Preloader/Preloader';

const BtnAdd = () => {
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.catalog);
    const {cards, idActiveCategory} = useSelector(state => state.catalog);
    

    return (
        <>
            {status === 'loadingButton' && <Preloader />}
           {
              status !== 'loadingButton'  &&  (<button onClick={() => dispatch(fetchAddCatalog({id: idActiveCategory, length: cards.length}))} className="btn btn-outline-primary">Загрузить ещё</button>)
           }
        </>
    )
}

export default BtnAdd;