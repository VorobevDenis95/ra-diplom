import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchSize } from "../../redux/slice/aboutCardSlice";

export interface PropsSize {
  item: {
    size: string,
    available: boolean,
  }
}



const Size = ({item}: PropsSize,   ) => {
  const dispatch = useDispatch();
  const {cardSize } = useSelector(state => state.aboutCard)
  const [selected, setSelected] = useState(false);

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