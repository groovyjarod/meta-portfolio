import React from "react";
import { Stack, VStack, HStack, Button, Box, Image } from "@chakra-ui/react";
import { specials } from "../reusables/SpecialsItems";
import Card from "../reusables/Card";
import { secondary } from "../reusables/styleGuide";

const SpecialsMobile = () => {
  const specialItems = specials;
  return (
    <>
      <VStack>
        <VStack
          justifyContent="center"
          gap="12px"
          alignItems="center"
          width="100%"
        >
          <h2 className="black">This Week's Specials</h2>
          <Button
            aria-label="On Click"
            size="lg"
            backgroundColor={secondary}
            color="black"
          >
            Full Online Menu
          </Button>
        </VStack>
        <Stack height="64px"></Stack>
        <VStack
          justifyContent="space-between"
          height="100%"
          width="100%"
          maxW="550px"
          padding="0 16px 0 16px"
          gap="16px"
        >
          {specialItems.map((special, index) => {
            const { image, name, description, price } = special;
            return (
              <>
                <Card
                  image={image}
                  name={name}
                //   description={description}
                  price={price}
                  isMobile={true}
                  key={index}
                />
              </>
            );
          })}
        </VStack>
      </VStack>
      <Stack height="128px"></Stack>
    </>
  );
};

export default SpecialsMobile;
