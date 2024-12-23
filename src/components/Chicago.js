import React from 'react'
import { Stack, VStack, HStack, Box, Image } from "@chakra-ui/react";
import brothers1 from '../assets/Mario and Adrian A.jpg'
import brothers2 from '../assets/Mario and Adrian b.jpg'

const bio = "Nestled in the heart of Chicago, Little Lemon was born from the shared passion of two brothers, Mario and Adrian, who grew up in a small Italian village where family dinners were the cornerstone of everyday life. Inspired by their grandmother’s recipes and the vibrant flavors of their homeland, the brothers set out to create a restaurant that blends traditional Italian cuisine with the modern energy of Chicago’s culinary scene. Little Lemon is more than a restaurant—it’s a celebration of family, community, and the enduring joy of sharing a meal, offering diners an authentic taste of Italy in a warm and inviting atmosphere."

const Chicago = () => {
  return (
    <>
    <Stack height="96px"></Stack>
    <VStack>
      <HStack justifyContent="space-between" gap="48px" width="950px">
        <VStack gap="16px" alignItems="start" maxW="50%">
          <h1 className='black'>Little Lemon</h1>
          <h2 className='black'>Chicago</h2>
          <span>{bio}</span>
        </VStack>
        <VStack className='family-img-container' maxW="50%">
          <Image src={brothers1} height="320px" width="250px" className='family-img-1' />
          <Image src={brothers2} height="320px" width="250px" className='family-img-2' />
        </VStack>
      </HStack>
    </VStack>
    <Stack height="96px"></Stack>
    </>
  )
}

export default Chicago