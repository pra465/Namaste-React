heading --> is an object
    later while updating the dom render method converts the heading object(react element into the normal HTML tag)

    React can work in a small portion of a page as well

## <----- Igniting our app ----->
We have to do a lot of changes to push our code to production - 

minification
image optimization
code spelliting
chuncking
remove comments
compress  

** Only react can't make our app faster, we need some more things like libraries and packages to make our app fast.

** NPM manages packages but it full form is not - "node package manager"

** NPM is the standard repository for all the packages

** package.json - configuration for our NPM.

** Bundler - webpack, parcel, vite -> it packages our app so that it can be shipped to production

** there are tow types of dependencies - dev dependency, normal dependency

** Dev dependency - used while development, don't need in production

** normal dependency we need in production as well

--> major.minor.patch
 
** caret(^) -> change minor and patch versions

** tilde(~) -> change only patch

** caret is safe to use

** Transitive dependency 

** Don't put node modules in production

** put package.json in git

** we can re-generate our node modules from package.json and package-lock.json

** To ignite our app using parcel we need to run - npx parcel index.html

** npx is used to execute a parcel

<!--  Browser scripts cannot have imports or exports  -->
solution to this error is to add type="module" in script tag

# parcel
Dev build
local server
HMR = Hot module replacement
file watching algorithm written in c++
cashing - faster build 
minification
bundling
image optimization
compressing
consistent hashing
code splitting
differential bundling - to support older browsers
Diagnostic
error handling
HTTPS 
Tree shaking - remove unused code
Different dev and prod bundles

To make our app production ready run this - npx parcel build index.html

** browserList - we use this to tell our app on which browser to compitable with

# Episode 03 Laying the foundation

** npm run start & npm start are same

** for build we have only one option "npm start build"

** React element is not a HTML element

** React is different snd JSX is different

** JSX is not HTML inside javascript , JSX is like HTML

** JSX is diffrent and HTML is different

** Babel is the open source JS compiler

** if we have to give attributes to jsx then those should be in camelCase.

** if we want to write the JSX then we have to write in round brackets.

** functional component - A normal javascript function which returns some JSX
or a function which returns a react element

** component composition - component inside component 

** JSX can have only one root element

** React fragment - behaves like an empty tag <></> or <React.Fragment></ React.Fragment>

# Episode 04 Talk is cheap, show me the code

** inline styles are given as the js object.

** config driven UI - 

** key - if we don't give the key then react won't know which item is updated and in this case it will rerender the whole items. and if we give the key then it will only render the updated item

** Giving ID as a key is not recomended.

# Episode 05 Let's get hooked

** Everything we do in recat can be done using normal HTML and JS. But why we are using a library or framework ? because it makes developers job easy.

** Never put hardcoded data in the component file

** it's a good habit to name all the constants in capital latter

** in a file we can write only one default export

** The best thing is react keep the UI layer and the data layer together

** REACT HOOKS - normal js function

    - useState() - superpowerful react variables
    - useEffect()

** whenever a state variable changes React re-renders the DOM.

** React is only good at DOM manuplactions

# Episode 06 Exploring the world

** fetch() - this superpower is not given by the javascript. this is given by the browsers.

** When we were trying to call swiggy api, then our browser was showing cors error. means our browser is stopping us from fetching data from different origin.

-- solution to above problem is to install chorme cors extension.

** Always call the API in useEffect() Hook. useEffect(callback fun, []);

Load -> API -> Render <<<<<<<<<<<<< Load -> Render -> API -> Render

** conditional rendering - rendering on the basis of condition is known as conditional rendering.

# Episode 07 Finding the path

** useEffect() -> 
    1. useEffect(callback()) -> when we don't pass dependency array then it will be called on every re-render
    2. useEffect(callback(), []) -> when we pass empty dependency array then it will be called only once after initial render.
    3. useEffect(callback(), [some_dependency]) -> when we pass some dependency then it will be called only when that dependency changes.

** Never use useState hook outside the functional component

**  Always use hooks on the top of your component

** Never use useState in if-else and for loop, functions.

** when we have to create routing then we have to create routing configuration.

** createBrowserRoute - helps in creating the routing configuration. routing configuration contains the routing information wher our route will go on some url.

ROuterProvider - provides the routing configuration to our app.

** useRouteError -> This is used to get the information about the routing error.

** ErrorElement only works in the root path.

** Never use <a></a> tag in react because when we click on that link then it loads the whole page, we have alternate to this -> <Link to="/"></Link> -> this is why we call react as a single page application.

** There are two types of routing - 
    1. server side routing
    2. client side routing

** Dinamic routing - 

path: /restaurants/:resID -> this is the dynamic path

** Behind the scean <Link> is using anchor tag <a>

# Episode 08 Let's get classy

** class component is normal class at the end of the day.

** in class based component we never update the state directly.

** use this.setState({count: this.state.count + 1})

** Lifecycle method - 

    constructor() -> render() -> componentDidMount()

    When we are rendering the same component it means we are creating the two instanses of the same class.

    ** react lifecycle method **

    Mounting of a component happens in two phases - 
        - Render Phase
        - Commit phase

    ** Never compare react life cycle to functional component

    ** useEffect() is called on every render if we are not giving dependency array, but componentDidMount() is updated not mounted. so componentDidUpdate() runs after every render.

    ** we can make componentSisMount() async but can't make useEffect() async, react will give error.

# Episode 09 Optimising our App

** single responsiblity principle - any class or function should have single responsiblity.

** Modularity - we break down our code into different small small modules.

-> it keeps our code testable and maintable

** Hook is just a utility function

** Always create a seperate file for a custom hook.

** when writing the custom hook then think of two things - input and output.

** we have a online listener which can help us to provide information about users online or offline

** Lazy loading - when app is initially loaded then grocery is not loaded. 

** Grocery is loaded when we go to the grocery url

# Episode 10 Jo dikhta hai vo bikta hai

Ways to add styling in react

** CSS, SAAS -> not a recomended way in react.

** styled components -> most companies use this

** Material UI, Bootstrap, chkara ui

** Tailwind works with all the frameworks, we can use it with js as well.

** if a specific class does not exist then we can write that like -> w-[200px]

** Tailwind is lightweight.

# Episode 11 Data is the new oil

** Higher order functions - 
Higher order component is a function which takes a component and returns a component