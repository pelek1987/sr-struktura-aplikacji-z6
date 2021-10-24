import {useReducer} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Menu, {MenuLink} from './components/Menu'
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import MainTemplate from "./templates/MainTemplate";

function App() {

    const linksActivityState = {
        home: true,
        about: false,
        contact: false,
        posts: false
    }

    const linksActivityStateReducer = (state, action) => {
        const setAllPropsFalsy = (obj) => {
            const objCopy = {...obj};
            for (const prop in objCopy) {
                objCopy[prop] = false;
            }
            return objCopy;
        }

        switch (action.type) {
            case 'homeIsActive':
                return {
                    ...setAllPropsFalsy(state),
                    home: true,
                };
            case 'aboutIsActive':
                return {
                    ...setAllPropsFalsy(state),
                    about: true,
                };
            case 'contactIsActive':
                return {
                    ...setAllPropsFalsy(state),
                    contact: true,
                };
            case 'postsIsActive':
                return {
                    ...setAllPropsFalsy(state),
                    posts: true,
                };
            default:
                return {...state};
        }
    }
    const [state, dispatch] = useReducer(linksActivityStateReducer, linksActivityState);

    const setActiveLink = (e) => {
        switch (e.target.attributes.href.value) {
            case '/':
                dispatch({type: 'homeIsActive'});
                break;
            case '/about':
                dispatch({type: 'aboutIsActive'});
                break;
            case '/contact':
                dispatch({type: 'contactIsActive'})
                break;
            case '/posts':
                dispatch({type: 'postsIsActive'})
                break;
            default:
                throw new Error('URL not found');
        }
    };

    return (
        <Router>
            <div>
                <Menu>
                    <MenuLink isActive={state.home} handleClick={setActiveLink} to="/">Home</MenuLink>
                    <MenuLink isActive={state.about} handleClick={setActiveLink} to="/about">About</MenuLink>
                    <MenuLink isActive={state.contact} handleClick={setActiveLink} to="/contact">Contact</MenuLink>
                    <MenuLink isActive={state.posts} handleClick={setActiveLink} to="/posts">Posts</MenuLink>
                </Menu>
                <MainTemplate>
                    <Switch>
                        <Route path="/posts">
                            <Posts>Posts Page</Posts>
                        </Route>
                        <Route path="/contact">
                            <Contact>Contact Page</Contact>
                        </Route>
                        <Route path="/about">
                            <About>About Page</About>
                        </Route>
                        <Route exact path="/">
                            <Home>Home Page</Home>
                        </Route>
                    </Switch>
                </MainTemplate>
            </div>
        </Router>
    )
        ;
}

export default App;
