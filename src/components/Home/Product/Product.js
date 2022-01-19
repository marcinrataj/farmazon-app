import React from 'react';
import './Product.css'

function Product({title, image, price, rating}) {
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
                        .fill()             //Metoda fill() uzupełnia wszystkie elementy tablicy
                        .map((_, i) => (    //map() zwróci nam nową tablicę
                            <p>⭐</p>        //zwraca nam ilość gwiazdek , my tylko wpiszemy ile
                        ))}
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt=""/>
            <button>Add to basket</button>
        </div>
    );
}

export default Product;