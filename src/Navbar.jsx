import {Link} from "react-router";
import './header.css'
const Navbar=()=>{
  return(
    <div className="header">
<div>
  <Link className="link" to={"/"}><h2>Logo</h2></Link>
</div>
<div>
  <ul>
<li>
<Link className="link" to="/">Home</Link>
</li>
<li>
   <Link className="link" to ="/about">About</Link>
</li>
<li>
   <Link  className="link"to ="/login">Login</Link>
 </li>
 <li>
  <Link className="link" to ="/contact">Contact</Link>
 </li>
 <li>
  <Link  className="link"to ="/categories">Categories</Link>
 </li>
</ul>
</div>
</div>
  );
 }
 export default Navbar;