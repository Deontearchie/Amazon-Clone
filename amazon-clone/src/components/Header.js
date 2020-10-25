import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="headerLogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                </Link>
            <div className="headerSearch">
                <input className="headerInput" type="text" />
                <SearchIcon className="headerSearchIcon" />
            </div>
            <div className="headerNav">
                <div className="headerOption">
                    <span className="headerOptionOne">Hello Guest</span>
                    <span className="headerOptiontwo">Sign In</span>
                </div>
                <div className="headerOption">
                    <span className="headerOptionOne">Returns</span>
                    <span className="headerOptionTwo">& Orders</span>

                </div>
                <div className="headerOption">
                    <span className="headerOptionOne">Your</span>
                    <span className="headerOptionTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="headerOptionBasket">
                    <ShoppingBasketIcon />
                    <span className="headerOptionTwo headerBasketCount">0</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
