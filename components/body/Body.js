import './Body.css';
import restaurantData from "../../data.js"
import RestaurantCard from '../restaurantCard/RestaurantCard';
const Body = () => {
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    restaurantData.map((ele, i) => {
                        return(
                            <RestaurantCard img={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantData[i]?.data?.cloudinaryImageId} name={restaurantData[i]?.data?.name} cuisines={restaurantData[i]?.data?.cuisines.join(", ")} key={restaurantData[i]?.data?.id}/>
                        )
                    })
                }
               
            </div>
        </div>
    );
}

export default Body;