import {useAppDispatch, useAppSelector} from '../../redux/redux-hook';
import { fetchAddCatalog } from '../../redux/slice/catalogSlice';
import Preloader from '../Preloader/Preloader';

const BtnAdd = () => {
    const dispatch = useAppDispatch();
    const {status} = useAppSelector(state => state.catalog);
    const {cards, idActiveCategory} = useAppSelector(state => state.catalog);
    
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