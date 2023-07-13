import { useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer";
import { MENU_API } from "../../utils/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API+id);

        const json = await data.json();

        console.log(json);

        setResInfo(json.data);
    }

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