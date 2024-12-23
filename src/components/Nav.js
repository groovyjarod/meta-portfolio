import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router";
import { HStack } from "@chakra-ui/react";

const Nav = () => {
  return (
    <nav>
        <HStack minW="900px" maxW="1000px" paddingTop="16px" paddingBottom="16px" justifyContent="space-evenly">
            <Link to="/">
                <img src={logo} alt="Little Lemon Logo" />
            </Link>
            <Link to="/" className="black">Home</Link>
            <Link to="/about" className="black">About</Link>
            <Link to="/booking" className="black">Book A Table</Link>
            {/* <Link to="/menu">Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order-online">Order Online</Link>
            <Link to="/login">Login</Link> */}
        </HStack>
    </nav>
  );
};

export default Nav;
