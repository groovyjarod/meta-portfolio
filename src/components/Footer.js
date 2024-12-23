import React from 'react'
import { Stack, VStack, HStack, Box, Image } from '@chakra-ui/react'
import { primary } from '../reusables/styleGuide'
import footerLogo from '../assets/footerLogo.png'

const Footer = () => {
  return (
    <footer>
      <VStack backgroundColor={primary} width="100vw">
        <HStack justifyContent="space-between" width="100%" maxW="950px">
          <Image height="300px" width="200px" src={footerLogo} />
          <p>
            <span>All Rights Reserved.</span>
            <br />
            <span>Capstone Project created by Jarod Day</span>
            <br />
            <span>Instagram: @Jaydayspins</span>
          </p>
        </HStack>
      </VStack>
    </footer>
  )
}

export default Footer