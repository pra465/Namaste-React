import { useEffect, useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(2);

    useEffect(
        setInterval(()=>{
            console.log("prashant")
        }, 1000)
        
        )
    return(
        <div className="user-card">
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Jhunjhunu</h3>
            <h4>Contact: prashant.poonia@gmail.com</h4>
        </div>
    )
}

export default User;