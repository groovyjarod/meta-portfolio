import React from "react";
import { Stack, VStack, HStack, Button } from "@chakra-ui/react";
import { secondary } from "../reusables/styleGuide";
import { specials } from "../reusables/SpecialsItems";
import Card from "../reusables/Card";

const Specials = () => {
  const specialItems = specials
  return (
    <>
      <VStack>
        <HStack justifyContent="space-between" width="100%" maxW="950px">
          <h1 className="black">This Week's Specials</h1>
          <Button aria-label="On Click" size="lg" backgroundColor={secondary} color="black">
            Full Online Menu
          </Button>
        </HStack>
        <Stack height="64px"></Stack>
        <HStack
          justifyContent="space-between"
          width="100%"
          maxW="950px"
          height="550px"
        >
          {specialItems.map((special, index) => {
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
