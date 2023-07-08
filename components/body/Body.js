import './Body.css';
import restaurantData from "../../data.js"
import RestaurantCard from '../restaurantCard/RestaurantCard';
import { CDN_URL } from '../../utils/constant';
import { useState } from 'react';
const Body = () => {
    let [restaurantList, setRestaurantList] = useState(restaurantData);
    return(
        <div className="body">
            <button className='filter' onClick={() => {
                let restaurantDat = restaurantList.filter((resD) =>  resD.data.avgRating> 4.4)
                setRestaurantList(restaurantDat)
            }}>Filter</button>
            {console.log(restaurantData)}
            <div className="res-container">
                {
                    restaurantList.map((ele, i) => {
                        return(
                            <RestaurantCard img={CDN_URL + restaurantData[i]?.data?.cloudinaryImageId} name={restaurantData[i]?.data?.name} cuisines={restaurantData[i]?.data?.cuisines.join(", ")} key={restaurantData[i]?.data?.id}/>
                        )
                    })
                }
               
            </div>
        </div>
    );
}

export default Body;