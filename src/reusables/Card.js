import React from "react";
import creditCard from "../assets/Dish icon.svg";
import { Stack, VStack, HStack, Box, Image } from "@chakra-ui/react";
const topCurvedBorder = "16px 16px 0 0";
const sideCurvedBorder = "16px 0 0 16px";
const CARD_BOX_SIZE = "290px"

const Card = ({ image, name, price, description, isMobile }) => {
  return (
    <>
      {!isMobile ? (
        <VStack
          borderRadius={topCurvedBorder}
          color="black"
          backgroundColor="#edefee"
          maxW={CARD_BOX_SIZE}
          padding="0 24px 24px 24px"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 5px, rgba(0, 0, 0, 0.23) 0px 3px 5px;"
        >
          <Box
            className="card-img-container"
            height={CARD_BOX_SIZE}
            width={CARD_BOX_SIZE}
            borderRadius={topCurvedBorder}
          >
            <Image
              className="card-img"
              boxSize={CARD_BOX_SIZE}
              src={image}
              borderRadius={topCurvedBorder}
            />
          </Box>
          <HStack justifyContent="space-between" width="100%">
            <h3>{name}</h3>
            <p style={{ color: "#ee9972" }}>{price}</p>
          </HStack>
          <p>{description}</p>
          <Stack height="32px"></Stack>
          <HStack justifyContent="start" width="100%">
            <h3>Order a delivery</h3>
            <img src={creditCard} alt="order button" />
          </HStack>
        </VStack>
      ) : (
        <HStack
          borderRadius={sideCurvedBorder}
          color="black"
          backgroundColor="#edefee"
          justifyContent="space-between"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 5px, rgba(0, 0, 0, 0.23) 0px 3px 5px;"
          maxH="150px"
          width="100%"
        >
          <Box
            className="card-img-container"
            maxW="175px"
            height="150px"
            borderRadius={sideCurvedBorder}
          >
            <Image
              className="card-img"
              height="100%"
              width={CARD_BOX_SIZE}
              src={image}
              borderRadius={sideCurvedBorder}
            />
          </Box>
          <VStack gap="4px" alignItems="end">

              <h3>{name}</h3>
              <p style={{ color: "#ee9972" }}>{price}</p>
            <HStack textAlign="end" alignItems="end" width="100%">
              <img src={creditCard} alt="order button" />
              <span>Tap to see more</span>
            </HStack>
          </VStack>
          <Stack height="32px"></Stack>
        </HStack>
      )}
    </>
  );
};

export default Card;
