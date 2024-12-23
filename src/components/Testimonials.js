import React from "react";
import { Stack, VStack, HStack } from "@chakra-ui/react";
import { tertiary1 } from "../reusables/styleGuide";
import TestimonialCard from "./TestimonialCard";
import profile1 from '../assets/profile1.webp.png'
import profile2 from '../assets/profile2.webp.png'
import profile3 from '../assets/profile3.webp.png'
import profile4 from '../assets/profile4.webp.png'

const testimonialData = [
  {
    image: profile1,
    name: 'Rajiit',
    rating: '4 stars'
  },
  {
    image: profile2,
    name: 'Bethany',
    rating: '17 stars'
  },
  {
    image: profile3,
    name: 'Esmerelda',
    rating: '4.8777777 stars'
  },
  {
    image: profile4,
    name: 'Princess',
    rating: '5 stars'
  },
]

const Testimonials = () => {
  return (
    <>
      <VStack justifyContent="center" backgroundColor={tertiary1}>
        <Stack height="64px"></Stack>
        <VStack>
          <h1 className="black">Testimonials</h1>
          <Stack height="32px"></Stack>
          <HStack gap="24px">
            {testimonialData.map((data, index) => (
              <TestimonialCard {...data} key={index} />
            ))}
          </HStack>
        </VStack>
        <Stack height="64px"></Stack>
      </VStack>
    </>
  );
};

export default Testimonials;
