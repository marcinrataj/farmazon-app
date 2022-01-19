import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
    return (
        /*logo amazona*/
        <div className='header'>
            <img className='header__logo' src="https://i.imgur.com/L94N53v.png?1" alt=""/>

            {/*input amazona*/}
            <div className='header__search'>
                <input className='header__searchInput' type="text"/>
                <SearchIcon
                    className='header__searchIcon'
                />
                {/*elementy navbaru amazona*/}
                <div className='header__nav'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Siemanko </span>
                        <span className='header__optionLineTwo'>
                            Zaloguj się</span>
                    </div>
                    <div className='header__option'>
                   <span className='header__optionLineOne'>
                            Zwroty </span>
                        <span className='header__optionLineTwo'>
                            & Zamówienia</span>
                    </div>
                    <div className='header__option'>
                   <span className='header__optionLineOne'>
                            Twój </span>
                        <span className='header__optionLineTwo'>
                            Prime</span>
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header_basketCount">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
