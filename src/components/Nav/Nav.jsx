import React, {useState, useEffect} from "react";
import { GiVineFlower } from "react-icons/gi";
import { Link } from "react-router-dom";
import './Nav.scss';

const Nav = () => {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 80){
      setIsSticky(true);
    } else{
      setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);


  return (
    <nav>
      <Link className="logo" to={"/"}>
        <GiVineFlower />
      </Link>

      <input type="checkbox" id="menuBtn" />
      <label htmlFor="menuBtn" className="menuBtn">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className={` ${isSticky ? "sticky" : ""} `}>
        {/* <li><a href="/about"> About </a></li> */}
        <li><Link to="/case-studies"> Case Studies </Link></li>
        <li><Link to="/contact"> Contact </Link></li>
        <li><Link to="/services"> Services </Link></li>
      </ul>


      <Link to={"/cart"} className="cart"> 
        Cart 
        <b>(0)</b>
      </Link> 
    </nav>
  );
}

export default Nav;