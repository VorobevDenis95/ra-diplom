import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCard } from '../../api/methods';

import { CardProductProps } from './CardProduct';


const AboutCard = () => {
 const {id} = useParams();
 const [load, setLoad] = useState(false);
 const [card, setCard] = useState<CardProductProps>();  

useEffect(() => {
  if (id) {
    const data = async () => {
        const card =  await getCard(id);
        setCard(card);
    }
    data();
  }
 }, [id])

  return (
    <section className="catalog-item">
        <h2 className="text-center">{card?.title}</h2>
        <div className="row">
          <div className="col-5">
              <img src={card?.images[0]}
               className="img-fluid" alt="" />
          </div>
          <div className="col-7">
              <table className="table table-bordered">
                  <tbody>
                      <tr>
                          <td>Артикул</td>
                          <td>{card?.sku}</td>
                      </tr>
                      <tr>
                          <td>Производитель</td>
                          <td>{card?.manufacturer}</td>
                      </tr>
                      <tr>
                          <td>Цвет</td>
                          <td>{card?.color}</td>
                      </tr>
                      <tr>
                          <td>Материалы</td>
                          <td>{card?.material}</td>
                      </tr>
                      <tr>
                          <td>Сезон</td>
                          <td>{card?.season}</td>
                      </tr>
                      <tr>
                          <td>Повод</td>
                          <td>{card?.reason}</td>
                      </tr>
                  </tbody>
              </table>
              <div className="text-center">
                <p>Размеры в наличии: {card?.sizes.map(el => (
                    <span className="catalog-item-size selected">{el.size}</span>
                  ))}
                </p> 
                <p>Количество: <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary">-</button>
                    <span className="btn btn-outline-primary">1</span>
                    <button className="btn btn-secondary">+</button>
                    </span>
                </p>
            </div>
            <button className="btn btn-danger btn-block btn-lg">В корзину</button>
        </div>
    </div>
</section>
  )

}

export default AboutCard;