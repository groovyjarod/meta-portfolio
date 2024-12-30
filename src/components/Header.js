import React from "react";
import { Link } from "react-router";
import headerPic from "../assets/restauranfood.jpg";
import { VStack, HStack, Stack, Box, Image, Button } from "@chakra-ui/react";
import { primary, secondary } from "../reusables/styleGuide";
import { PiX } from "react-icons/pi";

const Header = () => {
  const BOX_SIZE = "420px"
  return (
    <>
      <VStack width="100vw" backgroundColor={primary}>
        <HStack
          height="100%"
          width="100%"
          maxW="1440px"
          justifyContent="space-evenly"
        >
          <VStack
            justifyContent="start"
            alignContent="start"
            alignItems="start"
            maxW="400px"
          >
            <Stack height="32px"></Stack>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <span className="white">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </span>
            <p></p>
            <br />
            <Link to="/booking">
              <Button
                aria-label="On Click"
                color="black"
                backgroundColor={secondary}
                size="lg"
              >
                Reserve a Table
              </Button>
            </Link>
            <br />
          </VStack>
          <Box
            backgroundColor="#ffffff"
            borderRadius="24px"
            height={BOX_SIZE}
            width={BOX_SIZE}
            className="headerImg"
          >
            <Image
              boxSize={BOX_SIZE}
              src={headerPic}
              borderRadius="24px"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 5px, rgba(0, 0, 0, 0.23) 0px 3px 5px;"
            />
          </Box>
        </HStack>
      </VStack>
      <Stack height="152px"></Stack>
    </>
  );
};

export default Header;
