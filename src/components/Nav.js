import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router";
import { HStack, Image, Box } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import hambuger from '../assets/🦆 icon _hamburger menu.svg'

const Nav = () => {
  const { width } = useWindowSize()
  return (
    <>
    {width > 800 ? (
      <nav>
        <HStack width="100%" maxW="1000px" paddingTop="16px" paddingBottom="16px" justifyContent="space-evenly">
            <Link to="/">
                <img src={logo} alt="Little Lemon Logo" />
            </Link>
            <Link to="/" className="black">Home</Link>
            <Link to="/about" className="black">About</Link>
            <Link to="/booking" className="black">Book A Table</Link>
        </HStack>
      </nav>
    ) : (
      <nav>
        <HStack width="100%" padding="16px" justifyContent="space-between">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <Box boxSize="30px" onClick={console.log('clicked')}>
          <Image src={hambuger} boxSize="30px" />
        </Box>
        </HStack>
      </nav>
    )}
    </>
  );
};

export default Nav;
