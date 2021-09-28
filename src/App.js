import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import NavbarHome from './pages/NavbarHome';


function App() {
  return (
    <>
    <NavbarHome/>
    <Home/>
    </>
  )
}
  export default App; 


// import { Switch, Route } from 'react-router';
// import './App.css';
// import Home from './pages/Home';
// import NavbarHome from './pages/NavbarHome';

// function App() {
//   return (
//  <BrowserRouter>
//   <Switch>
//     <Route exact path="/" component={NavbarHome} />
//     <Route exact path="/Home" component={Home} />
//     <Route />
//     </Switch>
//  </BrowserRouter>
//   )
// }

// export default App;

