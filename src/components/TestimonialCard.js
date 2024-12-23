import React from 'react'
import { Box, VStack, HStack, Image } from '@chakra-ui/react'
import { tertiary3 } from '../reusables/styleGuide'

const TestimonialCard = ({image, name, rating}) => {
  return (
    <>
    <VStack justifyContent="center" alignItems="start" backgroundColor={tertiary3} padding="32px" borderRadius="8px" width="220px" height="275px" boxShadow="rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px;">
        <Image src={image} borderRadius="50%" height="75px" width="75px" />
        <h3>{name}</h3>
        <hr />
        <p>{name} Gives this place {rating}!! Thank you {name}!</p>
    </VStack>
    </>
  )
}

export default TestimonialCard