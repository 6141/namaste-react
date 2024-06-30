* Hooks are normal JS utility functions written by face book developers
Two important hooks
1) useState() 
2) useEffect()

whenever state variable updates react will rerender the component which will update the UI
const [x, setX ] = useState('')
setX('hiii)

React uses reconciliation ALgorithm(React fiber)

Usestate- we cant create usestate in if else 

For useEffect -- If we have dependency array it will be called only once when component is rendered and wont be called if you rerender it or 
If dependecy array  - on every rerender it will be called
If any value is given in the dependency array - when that value is updated only it will be rerendered


3) useRouterError - hook given by react router dom
tells exact reason for the error
Outlet - willl replace the exact children component

when using the react never use an anchor tag- we can navigate to other pages with out complete refresh(Link component)


React - single page application

Two types of routing  we can have in web page application:
1) Client side routing
2) Server side routing
Server side routing --> network calls happens again get the data again and reload page
Client side routing --> no network calls happen - app just replaces the components and get the data


* In the useEffect() --> 
if we return something that is similar to componentDidunMount ( when component is removed then we call this return )