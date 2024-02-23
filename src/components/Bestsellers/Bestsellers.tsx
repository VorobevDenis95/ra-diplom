import { useEffect } from "react";
import Product from "../Product/Product.tsx";
import { fetchTopSales } from "../../redux/slice/topSalesSlice.tsx";
import Preloader from "../Preloader/Preloader.tsx";
import { PropsProduct} from "../../types/ProductInterface.ts";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hook.ts";


const Besselers = () => {
  // const [isLoading, setLoading] = useState(false);
  // const [showComponent, setShowComponent] = useState(true);
  // const [list, setList] = useState<Array<PropsProduct>>([]);

  const dispath = useAppDispatch();

  const {cards, error, status} = useAppSelector(state => state.topSales);
  

  useEffect(() => {
    dispath(fetchTopSales())
  }, [dispath]);
  
  
  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        {status === 'loading' && <Preloader />}
        {error && <h2>{error}</h2>}
        <div className="row">
        {!error && cards.map((el: PropsProduct) => (
          <Product key={el.id} item={el}/>))}
        </div>
       </section>
    </>
  )
}

export default Besselers;