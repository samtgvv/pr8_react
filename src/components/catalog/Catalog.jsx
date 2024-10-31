import { Card } from '../card/Card';
import s from './Catalog.module.css';
import { products } from '../../data/data'
import { Search } from '../search/Search'
import { useState } from 'react'

export function Catalog() {
    const [query, setQuery] = useState('')
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    })

    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <Search handleChange={handleChange} />
            <div className={s.cat}>
                <p>Категории:</p>
                <div className={s.btns}>
                    <buttton className='btn'>Все товары</buttton>
                    <buttton className='btn'>Шины/колеса</buttton>
                    <buttton className='btn'>Масла</buttton>
                    <buttton className='btn'>Ароматизаторы</buttton>
                </div>
            </div>
            <div className={s.cards}>
                {
                    filteredProducts.length ?
                    filteredProducts.map((product) => {
                        return (
                            <Card id={product.id} img={product.img} name={product.name} price={product.price} />
                        )
                    })
                    :
                    <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
            <a href="#">Загрузить еще товары</a>
        </section>
    )
}