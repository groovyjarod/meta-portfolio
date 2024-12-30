import React from "react";
import { Link } from "react-router";
import headerPic from "../assets/restauranfoodMobile.webp";
import { VStack, Stack, Button } from "@chakra-ui/react";
import { secondary } from "../reusables/styleGuide";

const HeaderMobile = () => {
  return (
    <>
      <VStack width="100vw" backgroundImage={headerPic} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat">
        <Stack height="64px"></Stack>

        <VStack
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          maxW="500px"
          textAlign="center"
          padding="0 8px 0 8px"
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
        <Stack height="64px"></Stack>
      </VStack>
      <Stack height="64px"></Stack>
    </>
  );
};

export default HeaderMobile;
