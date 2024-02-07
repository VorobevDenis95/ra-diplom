import { useEffect, useState } from "react";
import {PropsProduct} from '../Product';
import Product from "../Product/Product.tsx";
import { getTopSales } from "../../api/methods.tsx";
import {useDispatch, useSelector} from 'react-redux';
import { fetchTopSales } from "../../redux/slice/topSalesSlice.tsx";
import Preloader from "../Preloader/Preloader.tsx";

const Besselers = () => {
  // const [isLoading, setLoading] = useState(false);
  // const [showComponent, setShowComponent] = useState(true);
  // const [list, setList] = useState<Array<PropsProduct>>([]);

  const dispath = useDispatch();

  const {cards, error, status} = useSelector(state => state.topSales);
  

  useEffect(() => {
    dispath(fetchTopSales())
  }, []);
  
  
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        {status === 'loading' && <Preloader />}
        {error && <h2>{error}</h2>}
        <div className="row">
        {cards.map(el => (
          <Product key={el.id} item={el}/>))}
        </div>
       </section>
    </>
  )
}

export default Besselers;