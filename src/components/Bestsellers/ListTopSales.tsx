import { PropsProduct } from "../Product/Product"
import Product from "../Product/Product"

const ListTopSales = (list: PropsProduct[]) => {
    return (
        <>
          {list.map(el => (
            <Product key={el.item.id} item={el.item}/>))}
        </>   
    )
}

export default ListTopSales;