import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
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
      <Route path="/ourwork"><OurWork /></Route>
      <Route path="/contactus"><ContactUs /></Route>
      <Route path="*"><NotFound /></Route>
      </Switch>
    </div>
  );
}

export default App;
