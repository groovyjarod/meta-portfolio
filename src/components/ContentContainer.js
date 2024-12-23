import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { VStack } from '@chakra-ui/react'

const ContentContainer = ({ Content }) => {
  return (
    <VStack>
      <Nav />
        <Content />
      <Footer />
    </VStack>
  )
}

export default ContentContainer