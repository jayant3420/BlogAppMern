import Navbar from "./components/MainMenu/Navigation";
import HomeIndex from "./components/Home/BlogMainWeb1Index";
import BollywoodIndex from "./components/Bollywood/BlogMainWeb2";
import TechnologyIndex from "./components/Technology/TechnologyIndex";
import HollywoodIndex from "./components/Hollywood/hollywoodIndex";
import FoodIndex from "./components/Food/foodIndex";
import FitnessIndex from "./components/Fitness/FitnessIndex";
import ReactBlog from "./components/React-Blog/Index";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
const App = () => {
  let CurrentPath = window.location.pathname;
  return (
    <>
      <Router>
        <ScrollToTop />
        {CurrentPath !== "/reactblog" ? <Navbar /> : null}
        <Switch>
          <Route path="/home" component={HomeIndex} />
          <Route path="/bollywood" component={BollywoodIndex} />
          <Route path="/technology" component={TechnologyIndex} />
          <Route path="/hollywood" component={HollywoodIndex} />
          <Route path="/food" component={FoodIndex} />
          <Route path="/fitness" component={FitnessIndex} />
          <Route path="/reactblog" component={ReactBlog} />
          <Redirect to="/home" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
