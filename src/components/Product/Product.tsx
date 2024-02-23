import {Link} from 'react-router-dom';
import { replaceNumber } from '../../utils';
import { PropsProductItem } from '../../types/ProductInterface';


const Product = ({item} : PropsProductItem) => {
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
      <img src={item.images[0]}
        className="card-img-top img-fluid" alt={item.title}/>
      <div className="card-body">
        <p className="card-text">{item.title}</p>
        <p className="card-text">{replaceNumber((String(item.price)))}</p>
        <Link to={`/products/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
      </div>
    </div>
    </div> 
    )
}

export default Product;
