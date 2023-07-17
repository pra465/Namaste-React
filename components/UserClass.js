import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users: []
        }
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users');

        const json = await data.json();
        console.log(json)
        this.setState({
            users: json
        })
    }

    componentDidUpdate(){
        this.timer = setInterval(() => {
            console.log("Namaste react")
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div className="user-card">
                {
                    this.state.users.map((user) => {
                        return(
                            <div>
                                <img src={user.avatar_url}/>
                                <h2>Name: {user.login}</h2>
                            </div>
                        )
                    })
                }
        </div>
        )
    }
}

export default UserClass;