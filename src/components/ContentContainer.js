import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { VStack } from '@chakra-ui/react'
import contentContainer from '../Container.css'

const ContentContainer = ({ Content }) => {
  return (
    <VStack className='page-container'>
      <Nav />
      <div className="page-content">
        <Content />
      </div>
      <Footer className='footer' />
    </VStack>
  )
}

export default ContentContainer