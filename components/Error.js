import { useRouteError } from "react-router-dom";
const Error = () => {
    console.log(useRouteError())
    return(
        <div className="error">
            <h1>Oops !!!</h1>
            <h2>Something went wrong</h2>
        </div>
    )
}

export default Error;