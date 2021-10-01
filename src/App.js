
import './App.css';
import Home from './pages/Home';
import NavbarHome from './pages/NavbarHome';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Collection from './pages/Collection';
import Baju from './pages/Baju';
import Footer from './component/Footer';
import DetailBaju from './pages/DetailBaju';
import Login from './pages/Login';


function App() {
  return (
 <BrowserRouter>
  <Switch>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={NavbarHome} />
    <Route exact path="/Collection" component={Collection} />
    <Route exact path="/Baju/:Collection" component={Baju} />
    <Route exact path="/DetailBaju" component={DetailBaju} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/" component={Footer} />
    <Route />
    </Switch>
 </BrowserRouter>
  )
}

export default App;

// import './App.css';
// import Home from './pages/Home';
// import NavbarHome from './pages/NavbarHome';

// function App() {
//    return (
//      <>
//      <NavbarHome/>
//      {/* <Home/> */}
//      </>
//    )
// }
// export default App;


