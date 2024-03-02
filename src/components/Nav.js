import {Link} from 'react-router-dom';
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
        <header>
          <div className='header-logo'>
            <img src={logo} alt='' className='logo-image'/>
          </div>
                <div className='nav-right'>
                {links.map((link) => {
                  return(
                    <Link to={link.url} className="nav-items">
                      {link.words}
                    </Link>
                  )
                })}
                </div>
        </header>
    )
}

export default Nav;
