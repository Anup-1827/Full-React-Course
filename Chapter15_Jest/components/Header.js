import React from "react";
// import { useSelector } from "react-redux";
import Lambo from "../assets/Lambo.jpg";
import { Link } from 'react-router-dom'


function Header() {
  // const { value } = useSelector((state) => state.counter);
  // console.log(value);
  return (
    <div>
      <img width={100} src={Lambo} alt="logo" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div data-testid="heading">
       Header
      </div>
    </div>
  );
}

export default Header;
