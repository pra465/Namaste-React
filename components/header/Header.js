import "./Header.css"
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/free-delivery-logo-with-bike-man-courier_1308-48827.jpg?size=626&ext=jpg&ga=GA1.1.1015578034.1682857744&semt=ais" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;