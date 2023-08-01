import "./Header.css"
import { LOGO_URL } from "../../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    const [auth, setAuth] = useState('login')
    useEffect(() => {
        console.log("useEffect called")
    }, [auth])
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                </ul>
                <button onClick={() => {(auth === 'login')? setAuth('logout') : setAuth('login')}}>{auth}</button>
            </div>
        </div>
    )
}

export default Header;