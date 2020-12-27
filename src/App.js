import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />


      <Nav />
      <Switch>
      <Route exact path="/"><AboutUs /></Route>
      <Route exact path="/work"><OurWork /></Route>
      <Route path="/work/:id"><MovieDetail /></Route>
      <Route path="/contactus"><ContactUs /></Route>
      <Route path="*"><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
