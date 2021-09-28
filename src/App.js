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
import './assets/css/navbar.css'


function App() {
  return (
 <BrowserRouter>
  <Switch>
    <Route exact path="/" component={NavbarHome} />
    <Route exact path="/Home" component={Home} />
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


