import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./container/Characters";
import Comics from "./container/Comics";
import Favorites from "./container/Favorites";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/comics">
                    <Comics />
                </Route>
                <Route path="/">
                    <Characters />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
