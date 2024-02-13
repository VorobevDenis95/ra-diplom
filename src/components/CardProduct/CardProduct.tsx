import { FC, useState } from "react";
import Sizes from "../Sizes/Sizes";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";


export interface CardProductProps {
    item: {
        id: number,
        category: number,
        title: string,
        images: string[],
        sku: string,
        manufacturer: string,
        color: string,
        material: string,
        reason: string,
        season: string,
        heelsiz: string,
        price: number,
        oldPrice: number,
        sizes: {
            size: string,
            available: boolean,
        }[],
    }
}

const CardProduct:FC<CardProductProps> = ({item}) => {

  const navigate = useNavigate();
    
  const {cardSize} = useSelector(state => state.aboutCard);   

  const [quantity, setQuantity] = useState(1);

  const clickUp = () => {
    if (!cardSize) return;
    quantity < 10 ? setQuantity(quantity + 1) : null; 
  }

  const clickDown = () => {
    if (!cardSize) return;
    quantity > 1 ?setQuantity(quantity - 1) : null
  }

  const dispatch = useDispatch();

  const {cards} = useSelector(state => state.cart)

  const product = {
    number: cards.length + 1,
    id: item.id,
    title: item.title,
    size: cardSize,
    quantity: quantity,
    price: item.price,
    total: quantity * Number(item.price)
  }

  const addToCart = () => {
    if (!cardSize) return;
    dispatch(addCart(product));
    navigate('/cart');  
  }

  console.log(item.price)

  return (
    <section className="catalog-item">
        <h2 className="text-center">{item.title}</h2>
            <div className="card-product-container">
                <div className="col-5">
                    <img src={item.images[0]}
                     className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{item.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{item.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{item.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{item.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{item.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{item.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                   <div className="card__sizes-container">
                        <Sizes list={item.sizes}/>
                        {/* <p>Размеры в наличии: {item.sizes.map(el => (
                            // <span key={el.size} className="catalog-item-size">{el.size}</span>
                            (<Size item={el} />)
                        )
                        )} 
                        </p>  */}
                        {item.sizes.length !== 0 && <p>Количество: <span className="btn-group btn-group-sm pl-2">
                            <button onClick={clickDown} className="btn btn-secondary">-</button>
                            <span className="btn btn-outline-primary">{quantity}</span>
                            <button onClick={clickUp} className="btn btn-secondary">+</button>
                            </span>
                        </p>}
                    </div>
                    {item.sizes.length !== 0 && <button onClick={addToCart} className="btn btn-danger btn-block btn-lg">В корзину</button>}
                </div>
            </div>
    </section>
  )
}

export default CardProduct;