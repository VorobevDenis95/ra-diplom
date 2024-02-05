import { useEffect, useState } from "react";
import {PropsProduct} from '../Product';
import Product from "../Product/Product.tsx";
import ListTopSales from "./ListTopSales.tsx";


const Besselers = () => {
  const [isLoading, setLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(true);
  const [list, setList] = useState<Array<PropsProduct>>([]);

  useEffect(() => {
    setLoading(true);
      getData();
  }, []);

  async function getData() {
    const request = await fetch('http://localhost:7070/api/top-sales');
    if (request.ok) {
        const data = await request.json();
        if (data.length === 0) setShowComponent(false);
        setLoading(false);
        setList(data);
    }
  }


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