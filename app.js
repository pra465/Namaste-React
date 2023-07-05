const heading = React.createElement("h1", {id: "heading"}, "Hello React !!!!");

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(heading);

    /* 
    heading --> is an object
    later while updating the dom render method converts the heading object(react element into the normal HTML tag)

    React can work in a small portion of a page as well
    
    */