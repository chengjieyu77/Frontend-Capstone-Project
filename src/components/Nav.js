import {Routes, Route,Link} from 'react-router-dom';
import Homepage from './Homepage.js';
import About from './About.js';
import logo from './Logo.svg';
function Nav(){
    const links = [
        {
          words: "HOME",
          url:"/",
        },
        {
          words: "ABOUT",
          url:"/about",

        },
        {
          words: "MENU",
          url:"/menu",

        },
        {
          words: "RESERVATIONS",
          url:"/reservations",

        },
        {
          words: "ORDER ONLINE",
          url:"/order-online",

        },
        {
            words: "LOGIN",
            url:"/login",
          },
      ];
    return(
        <>
            <nav className='nav'>
                <img src={logo} alt='' className='nav-left'/>
                <div className='nav-right'>
                {links.map((link) => {
                  return(
                    <Link to={link.url} className="nav-items">
                      {link.words}
                    </Link>
                  )
                })}
                </div>
            </nav>
        <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* <Route path='/menu' element={<Menu />}></Route> */}
                {/* <Route path='/reservations' element={<Reservations />}></Route> */}
                {/* <Route path='/order-online' element={<OrderOnline />}></Route> */}
                {/* <Route path='/login' element={<Login />}></Route> */}

        </Routes>
        </>
    )
}

export default Nav;
