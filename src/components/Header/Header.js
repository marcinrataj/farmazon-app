import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from 'react-router-dom';
import {useStateValue} from '../StateProvider/StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        /*logo amazona*/
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src="https://i.imgur.com/L94N53v.png?1" alt=""/>
            </Link>
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
                    <Link to='/checkout'>
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon/>
                            <span className="header__optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
