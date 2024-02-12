import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeItemCart } from "../../redux/slice/cartSlice";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

export interface PropsCartProduct {
  number: number,
  id: string,
  title: string,
  size: string,
  quantity: number,
  price: string,
  total: string,
}

const Cart = () => {
    const dispatch = useDispatch();
    const { cards, status, error } = useSelector(state => state.cart);    
    const [orderItems, setOrderItems] = useState([]);

    const [phoneInput, setPhoneInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    
    useEffect(() => {
      addOwnerItems();
    }, [cards])

    const changePhoneInput = (e) => {
      setPhoneInput(e.target.value);
    }

    const changeAddresInput = (e) => {
      setAddressInput(e.target.value);
    }

    const total = cards.reduce((acc: number, item: { total: string; }) => {
      return acc + Number(item.total);
    }, 0)
    
    const deleteItem = (card: PropsCartProduct) => {
      dispatch(removeItemCart(card));
    }

    const addOwnerItems = () => {
      console.log(1);
      const arr: ((prevState: never[]) => never[]) | { id: number; price: number; count: number; }[] = [];
      cards.map((card: PropsCartProduct) => {
        const item = {
          id: Number(card.id),
          price: Number(card.price),
          count: Number(card.quantity),
        }
        arr.push(item);
      })
      setOrderItems(arr);
    }

    const order = {
      owner: {
        phone: phoneInput, 
        address: addressInput,
      },
      items: orderItems,
    }

    const makeAnOrder = (e) => {
      e.preventDefault();
      if (cards.length !== 0) {
        dispatch(fetchCart(order));
      }
    } 

    return (
        <>
        <section className="cart">
            <h2 className="text-center">Корзина</h2> 
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Название</th>
                  <th scope="col">Размер</th>
                  <th scope="col">Кол-во</th>
                  <th scope="col">Стоимость</th>
                  <th scope="col">Итого</th>
                  <th scope="col">Действия</th>
                </tr>
              </thead>
                {cards.map((card: PropsCartProduct )=> (
                    <tbody key={`${card.id}${card.size}`}>
                      <tr>
                        <td scope="row">{card.number}</td>
                        <td><a href={`/products/${card.id}`}>{card.title}</a></td>
                        <td>{card.size}</td>
                        <td>{card.quantity}</td>
                        <td>{card.price}</td>
                        <td>{card.total}</td>
                        <td><button onClick={() => deleteItem(card)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
                       </tr>
                     </tbody>
                ))}
                        <tr>
                          <td colspan="5" className="text-right">Общая стоимость:</td>
                          <td>{total}</td>
                          <td></td>
                          </tr>
            </table>
          </section>

          <section className="order">
            {status === 'loading' && <Preloader/>}
            {status} {error}
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card-order" >
              <form onSubmit={makeAnOrder} className="card-body">
                <div className="form-group">
                  <label className='phone__form-group'for="phone">Телефон</label>
                  <input type='text' className="form-control" 
                  onChange={changePhoneInput}
                  id="phone" placeholder="Ваш телефон" required/>
                </div>
                <div className="form-group">
                  <label className='address__form-group' for="address">Адрес доставки</label>
                  <input type='text' className="form-control" 
                  onChange={changeAddresInput}
                  id="address" placeholder="Адрес доставки" required/>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="agreement" required/>
                  <label className="form-check-label" for="agreement">Согласен с правилами доставки</label>
                </div>
                <button type="submit" onSubmit={makeAnOrder} 
                className="btn btn-outline-secondary">Оформить</button>
              </form>
            </div>
          </section>
          </>
    )
}

export default Cart;