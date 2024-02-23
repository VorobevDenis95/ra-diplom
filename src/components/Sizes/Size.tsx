import { switchSize } from "../../redux/slice/aboutCardSlice";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hook";
import { PropsSizeItem } from "../../types/SizeInterface";

const Size = ({item}: PropsSizeItem,   ) => {
  const dispatch = useAppDispatch();
  const {cardSize } = useAppSelector(state => state.aboutCard)

  const active = item.size === cardSize ? 'selected' : '';

  const handleClick = (id: string) => {
    item.size === cardSize ? 
    dispatch(switchSize('')) :
    dispatch(switchSize(id));
    // selected ? setSelected(false) : setSelected(true);
  }


  return (
    <>
    {item.available && <span onClick={() => handleClick(item.size)} className={`catalog-item-size ${active}`}>{item.size}</span>}
    </>
  )  
}

export default Size;