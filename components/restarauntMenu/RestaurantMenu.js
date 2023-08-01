import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () => {


    const {id} = useParams()
    
    const resInfo = useRestaurantMenu(id);


    if(resInfo === null) return <Shimmer />
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (<li>{item.card.info.name}</li>))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;