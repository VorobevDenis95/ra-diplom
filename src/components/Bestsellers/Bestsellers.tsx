import { useEffect, useState } from "react";
import {PropsProduct} from '../Product';
import Product from "../Product/Product.tsx";
import { getTopSales } from "../../api/methods.tsx";

const Besselers = () => {
  const [isLoading, setLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const [list, setList] = useState<Array<PropsProduct>>([]);

  useEffect(() => {
    setLoading(true);
    
    const data = async () => {
      const cards = await getTopSales();
      if (cards.length === 0) setShowComponent(false)
      setList(cards);
      setLoading(false);
    }
    
    data();
  }, []);

  return (
    showComponent ? 
    ( list ?
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {list.map(el => (
        <Product key={el.id} item={el}/>))}
      </div>
    </section> : ''
    ) : ''
  )
}

export default Besselers;