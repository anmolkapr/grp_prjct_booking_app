import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";


function App() {
  return (
    <BrowserRouter>
    <TopNav/>
    <Switch>
       <Route exact path= "/" component={Home}></Route>
       <Route exact path= "/login" component={Login}></Route>
       <Route exact path= "/register" component={Register}></Route>
    </Switch>
      
    </BrowserRouter>
  );
}

export default App;
