import "./App.css";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import { Container } from "react-bootstrap";
import Topbar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import Homescreen from "./screens/Homescreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
          <Topbar/>
          <NavBar/>
          <Switch>
            <Route path="/" component={Homescreen} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/policy" component={Policy} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
