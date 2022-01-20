import React from 'react';
import './Product.css'
import { useStateValue} from "../../StateProvider/StateProvider";
import basket from '../../reducer/reducer'


function Product({id, title, image, price, rating}) {
    //state nie ruszamy, dispatch manipulujemy

    const [{basket}, dispatch] = useStateValue();
// inaczej rozumiejąc dispatch jest jak pistolet,w sensie zmienia wartość

    // console.log(`this is the basket >>> `, basket);
    //
    //wyślij przedmiot do warstwy danych
    const addToBasket = () => {
        dispatch({                      //dispatch znaczy że manipuluje wastwą danych
            type: 'ADD_TO_BASKET',
            item: {
                id: id,                 //id
                title: title,           //nazwa
                image: image,           //obraz pruduktu
                price: price,           //cena
                rating: rating,         //ilość gwiazdek

            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Dodaj do koszyka</button>
        </div>
    );
}

export default Product;