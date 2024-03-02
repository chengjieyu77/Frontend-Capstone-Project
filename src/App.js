import './App.css';
import Header from "./components/Header";
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import {Routes, Route,Link} from 'react-router-dom';
import Homepage from './components/Homepage.js';
import About from './components/About.js';
function App() {
  return (
    <>
    <nav>
    <Nav/>
    </nav>
      <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* <Route path='/menu' element={<Menu />}></Route> */}
                {/* <Route path='/reservations' element={<Reservations />}></Route> */}
                {/* <Route path='/order-online' element={<OrderOnline />}></Route> */}
                {/* <Route path='/login' element={<Login />}></Route> */}

        </Routes>
      <Footer/>
    </>
  );
}

export default App;
