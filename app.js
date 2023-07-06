import React from "react";
import ReactDOM from "react-dom/client";

// This is not pure JS so browser can't understand this, browser is understanding this because of parcel

// JSX (transpiled before it reaches the JS engine) - parcel - babel

// JSX = React.createElement => ReactElement - JS object => HTMLElement(render)

// React element
const JsxHeading = () => <h1>JSX Syntax !!</h1>


// functional component
const HeadingComponent = () =>
    (
        <div className="heading">
            <JsxHeading />
            <h1>Functional component !!</h1>
        </div>
    )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);