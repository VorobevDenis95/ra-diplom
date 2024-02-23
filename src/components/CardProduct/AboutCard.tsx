import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { fetchAboutCard } from '../../redux/slice/aboutCardSlice';
import CardProduct from './CardProduct';
import Preloader from '../Preloader/Preloader';
import { useAppDispatch, useAppSelector } from '../../redux/redux-hook';
import { CardProductProps } from '../../types/CardProductInterface';


const AboutCard = () => {
    const dispatch = useAppDispatch();
    const {card, error, status} = useAppSelector(state => state.aboutCard);
    
    console.log(card)
    const {id} = useParams();
    // const [load, setLoad] = useState(false);
    // const [card, setCard] = useState<CardProductProps>();  

useEffect(() => {
    dispatch(fetchAboutCard(id as string));
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