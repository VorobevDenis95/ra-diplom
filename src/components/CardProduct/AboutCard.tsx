import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { fetchAboutCard } from '../../redux/slice/aboutCardSlice';
import CardProduct from './CardProduct';
import Preloader from '../Preloader/Preloader';
import { CardProductProps } from './CardProduct';

const AboutCard = () => {
    const dispatch = useDispatch();
    const {card, error, status} = useSelector(state => state.aboutCard);
    
    console.log(card)
    const {id} = useParams();
    // const [load, setLoad] = useState(false);
    // const [card, setCard] = useState<CardProductProps>();  

useEffect(() => {
    dispatch(fetchAboutCard(id));
 }, [id])

  return (
    <>
        {status === 'loading' && <Preloader />}
        {error && <h2>{error}</h2>}
        {card.map((el : CardProductProps) => (
            <CardProduct key={el.id} item={el}/>
        ))}
    </>
  )

}

export default AboutCard;