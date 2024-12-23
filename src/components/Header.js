import React from 'react'
import headerPic from '../assets/restauranfood.jpg'
import { VStack, HStack, Stack, Box, Image, Button } from '@chakra-ui/react'
import { primary, secondary } from '../reusables/styleGuide'

const Header = () => {
  return (
    <>
    <VStack height="330px" width="100vw" backgroundColor={primary}>
      <HStack height="100%" width="100%" maxW="1440px" justifyContent="space-evenly">
        <VStack justifyContent="start" alignContent="start" alignItems="start" maxW="400px">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='white'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button aria-label="On Click" color="black" backgroundColor={secondary} size="lg">Reserve a Table</Button>
        </VStack>
        <Box backgroundColor="#ffffff" borderRadius="24px" height="380px" width="380px" className='headerImg'>
          <Image boxSize="380px" src={headerPic} borderRadius="24px" />
        </Box>
      </HStack>
    </VStack>
    <Stack height="152px"></Stack>
    </>
  )
}

export default Header