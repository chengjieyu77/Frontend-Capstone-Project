import {Routes, Route,Link} from 'react-router-dom';
import Homepage from './Homepage';
const Main = () =>{
    return(
        <>
        <Routes>
                <Route path='/' element={<Homepage />}></Route>
                {/* <Route path='/about' element={<About />}></Route> */}
                {/* <Route path='/menu' element={<Menu />}></Route> */}
                {/* <Route path='/reservations' element={<Reservations />}></Route> */}
                {/* <Route path='/order-online' element={<OrderOnline />}></Route> */}
                {/* <Route path='/login' element={<Login />}></Route> */}

        </Routes>
        </>
    )
}

export default Main;