import { Link } from 'react-router-dom';
import s from './Card.module.css';
export function Card({ id, img = 'https://tmka72.ru/TMKA/media/photos/2022/11/14/8e56c287600191f403c273378136218b.jpg', name = 'Неизвестно', price = 'Неизвестно' }) {
    return (

        <div className={s.card}>
            <img src={img} alt="tovar" />
            <h3>{name}</h3>
            <div className={s.card__inner}>
                <p className={s.price}>{price} ₽</p>
                <Link className='btn' to={`${id}`}>Подробнее</Link>
            </div>
        </div>

    )
}