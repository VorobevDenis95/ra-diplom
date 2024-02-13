import Size, { PropsSize } from "./Size";

export interface PropsSizes {
    list: PropsSize[],
}

const Sizes = ({list} : PropsSizes) => {


    return (
    
        <>
        <p>Размеры в наличии:
        {
        list.map(el => (
            <Size key={el.size} item={el} />
          ))
        }
        </p>
          </>
    )
}

export default Sizes; 