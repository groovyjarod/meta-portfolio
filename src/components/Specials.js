import React from "react";
import { Stack, VStack, HStack, Button, Box, Image } from "@chakra-ui/react";
import { secondary } from "../reusables/styleGuide";
import special1 from "../assets/greek salad.jpg";
import special2 from "../assets/bruchetta.svg";
import special3 from "../assets/lemon dessert.jpg";
import creditCard from '../assets/Dish icon.svg'

const images = [special1, special2, special3];

const descriptions = [
  "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  "Our Bruschetta is made from grilled bread that has been smeared with garlic, seasoned with salt and olive oil, and baked golden crispy.",
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

const topCurvedBorder = "16px 16px 0 0"

const Card = ({ image, name, price, description }) => {
  return (
    <>
      <VStack borderRadius={topCurvedBorder} color="black" backgroundColor="#edefee" maxW="290px" padding="0 24px 24px 24px" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 5px, rgba(0, 0, 0, 0.23) 0px 3px 5px;">
        <Box className="card-img-container" height="290px" width="290px" borderRadius={topCurvedBorder}>
          <Image className="card-img" boxSize="290px" src={image} borderRadius={topCurvedBorder} />
        </Box>
        <HStack justifyContent="space-between" width="100%">
          <h3>{name}</h3>
          <p style={{color:"#ee9972"}}>{price}</p>
        </HStack>
        <p>{description}</p>
        <Stack height="32px"></Stack>
        <HStack justifyContent="start" width="100%">
          <h3>Order a delivery</h3>
          <img src={creditCard} alt="order button" />
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
                key={index}
              />
            );
          })}
        </HStack>
      </VStack>
      <Stack height="128px"></Stack>
    </>
  );
};

export default Specials;
