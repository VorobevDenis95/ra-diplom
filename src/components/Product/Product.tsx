import {Link} from 'react-router-dom';
import { replaceNumber } from '../../utils';


export interface PropsProduct {
  id: number;
  category: string;
  title: string;
  price: number;
  images: string[];
}

const Product = ({item} : PropsProduct) => {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
      <img src={item.images[0]}
        className="card-img-top img-fluid" alt={item.title}/>
      <div className="card-body">
        <p className="card-text">{item.title}</p>
        <p className="card-text">{replaceNumber((item.price))}</p>
        <Link to={`/products/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
      </div>
    </div>
    </div> 
    )
}

export default Product;
