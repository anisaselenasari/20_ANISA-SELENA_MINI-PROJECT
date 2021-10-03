
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
    {/* baris 22 kenapa ada :collection . karna biar pas kita pencet collection , nah nanti nah nanti bisa munculin apa yg kita mau di
    halaman baju. karna kita udh setting di halaman baju itu ditambah slice(/) id kategori, yang mau kita tunjukin */}
    <Route exact path="/DetailBaju/:id" component={DetailBaju} />
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


