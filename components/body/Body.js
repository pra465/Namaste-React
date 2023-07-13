import './Body.css';
import RestaurantCard from '../restaurantCard/RestaurantCard';
import { CDN_URL } from '../../utils/constant';
import { useEffect, useState } from 'react';
import Shimmer from '../shimmer/Shimmer';
import { Link } from 'react-router-dom';
const Body = () => {
    let [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filtredRestroList, setFiltredRestroList] = useState([]);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
        setFiltredRestroList(json?.data?.cards[2]?.data?.data?.cards)
    }
    if(restaurantList.length === 0){
        return(
            <div className="body">
                <div className="res-container">
                    {
                        Array(10).fill("2").map((ele, i) => {
                            return(
                                <Shimmer />
                            )
                        })
                    }
                   
                </div>
            </div>
        );
    }
    return(
        <div className="body">
            <button className='filter' onClick={() => {
                let restaurantDat = restaurantList.filter((resD) =>  resD.data.avgRating> 4.5)
                setRestaurantList(restaurantDat)
            }}>Filter</button>
            <div className='search-field'>
                <input type="text" id='search' value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}/>
                <button onClick={() => {
                    let filtredRestro = restaurantList.filter((element) => (element.data.name.toLowerCase().includes(searchText.toLowerCase())))
                    console.log(filtredRestro)
                    setFiltredRestroList(filtredRestro);
                }}>search</button>
            </div>
            <div className="res-container">
                {
                    filtredRestroList.map((ele) => {
                        return(
                            <Link to={"/restaurants/" + ele?.data?.id} key={ele?.data?.id}><RestaurantCard img={CDN_URL + ele?.data?.cloudinaryImageId} name={ele?.data?.name} cuisines={ele?.data?.cuisines.join(", ")}/></Link>
                        )
                    })
                }
               
            </div>
        </div>
    );
}

export default Body;