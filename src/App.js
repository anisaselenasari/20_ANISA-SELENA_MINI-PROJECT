// import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';
// import Home from './pages/Home';
// import NavbarHome from './pages/NavbarHome';


// function App() {
//   return (
//     <>
//     <NavbarHome/>
//     <Home/>
//     </>
//   )
// }
//   export default App; 



import './App.css';
import Home from './pages/Home';
import NavbarHome from './pages/NavbarHome';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import Collection from './pages/Collection';


function App() {
  return (
 <BrowserRouter>
  <Switch>
    
    <Route exact path="/home" component={Home} />
    <Route exact path="/home" component={NavbarHome} />
    <Route exact path="/Collection" component={Collection} />
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


