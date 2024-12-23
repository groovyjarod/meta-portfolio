import React from "react";
import { Stack, VStack, HStack, Button, Box, Image } from "@chakra-ui/react";
import { secondary } from "../reusables/styleGuide";
import special1 from "../assets/greek salad.jpg";
import special2 from "../assets/bruchetta.svg";
import special3 from "../assets/lemon dessert.jpg";

const images = [special1, special2, special3];

const descriptions = [
  "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
];

const prices = ["$12.99", "$5.99", "$5.00"];

const names = ["Greek Salad", "Bruschetta", "Lemon Desert"];

const specials = [
  {
    image: images[0],
    name: names[0],
    price: prices[0],
    description: descriptions[0],
  },
  {
    image: images[1],
    name: names[1],
    price: prices[1],
    description: descriptions[1],
  },
  {
    image: images[2],
    name: names[2],
    price: prices[2],
    description: descriptions[2],
  },
];

const Card = ({ image, name, price, description }) => {
  return (
    <>
      <VStack borderRadius="16px 16px 0 0" color="black" backgroundColor="#edefee" maxW="290px" padding="0 24px 24px 24px">
        <Box height="290px" width="290px" borderRadius="16px">
          <Image boxSize="290px" src={image} borderRadius="16px 16px 0 0" />
        </Box>
        <HStack justifyContent="space-between" width="100%">
          <h3>{name}</h3>
          <p style={{color:"#ee9972"}}>{price}</p>
        </HStack>
        <p>{description}</p>
        <Stack height="32px"></Stack>
        <HStack>
          <h3>Order a delivery</h3>
        </HStack>
      </VStack>
    </>
  );
};

const Specials = () => {
  return (
    <>
      <VStack>
        <HStack justifyContent="space-between" width="100%" maxW="950px">
          <h1 className="black">This Weeks Specials</h1>
          <Button aria-label="On Click" size="lg" backgroundColor={secondary} color="black">
            Online Menu
          </Button>
        </HStack>
        <Stack height="64px"></Stack>
        <HStack
          justifyContent="space-between"
          width="100%"
          maxW="950px"
          height="550px"
        >
          {specials.map((special, index) => {
            return (
              <Card
                image={special.image}
                name={special.name}
                description={special.description}
                price={special.price}
                index={index}
              />
            );
          })}
        </HStack>
      </VStack>
    </>
  );
};

export default Specials;
