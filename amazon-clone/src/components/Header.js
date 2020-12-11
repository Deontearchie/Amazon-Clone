import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import { auth } from '../firebase';
function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
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
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="headerOption">
                    <span className="headerOptionOne">Hello Guest</span>
                    <span className="headerOptiontwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                </Link>
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
                    <span className="headerOptionTwo headerBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;
