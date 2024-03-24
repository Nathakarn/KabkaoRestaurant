import {Link} from "react-router-dom";

function Navbar(){
    const navStyle ={
        backgroundColor: "darksalmon",
    };
    return(
      <div>
        <div className="navbar bg-base-100 text-[#FFFFFF]" style={navStyle}>
    <div className="flex-1">
      <a className="btn btn-ghost text-3xl">KABKAO</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
            <Link to='/'>Home</Link>
            {/* <a>Home</a> */}
        </li>
        <li>
           <Link to='About'>About</Link>
        </li>
        <li>
            <Link to='Menu'>Menu</Link>
        </li>
        <li>
            <Link to='Booking'>Book A Table</Link>
            
        </li>
      </ul>
    </div>
  </div>
      </div>
    );
  }
  export default Navbar;