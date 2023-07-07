import "./RestaurantCard.css"
const RestaurantCard = ({name, img, cuisines}) => {
    return(
        <div className="res-card">
            <img className="res-img" alt="res-logo" src={img}/>
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>4.4</p>
            <p>38 min</p>
        </div>
    );
}

export default RestaurantCard;
