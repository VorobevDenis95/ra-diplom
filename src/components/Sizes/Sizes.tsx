import Size, { PropsSize } from "./Size";

export interface PropsSizes {
    list: PropsSize[],
}

const Sizes = ({list} : PropsSizes) => {

  const handleClick = (id) => {
    // selected ? setSelected(false) : setSelected(true);
    console.log(id) 
  }

    return (
    
        <>
        <p>Размеры в наличии:
        {
        list.map(el => (
            <Size handleClick={handleClick} key={el.size} item={el} />
          ))
        }
        </p>
          </>
    )
}

export default Sizes; 