import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home"
import Login from "./Components/Authentication/Login"
import ResponsiveNav from "./Components/Nav/ResponsiveNav"
import Doctors from "./Components/Home/Doctors/Doctors";
import NotFound from "./Components/NotFound/NotFound"
import AuthProvider from "./contexts/AuthProvider"
import Services from "./Components/Home/Services/Services";
import PrivateRoute from "./Components/Authentication/PrivateRoute"
import Details from "./Components/Home/Service/Details"
import Footer from "./Components/Footer/Footer";
import News from "./Components/News/News";
import Tools from "./Components/Tools/Tools";
function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        <ResponsiveNav></ResponsiveNav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Services">
            <Services></Services>
          </Route>
          <Route path="/Doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/Details/:serviceId">
              <Details></Details>
            </PrivateRoute>
          <PrivateRoute path="/News">
              <News></News>
            </PrivateRoute>
          <PrivateRoute path="/Tools">
              <Tools></Tools>
            </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
