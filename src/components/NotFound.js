import React from 'react'
import { Link } from 'react-router'
import { Stack, VStack, Button } from '@chakra-ui/react'
import { primary } from '../reusables/styleGuide'

const NotFound = () => {
  return (
    <>
    <VStack backgroundColor={primary} height="160px" width="100vw" justifyContent="center" alignItems="center">
        <h1>Not found</h1>
    </VStack>
    <Stack height="64px"></Stack>
    <VStack alignItems="center" width="100vw">
        <VStack maxW="1050px">
            <h2 className='black'>The link you followed goes to a page that does not exist.</h2>
            <Link to="/">
                <Button width="200px">Go Home</Button>
            </Link>
        </VStack>
    </VStack>
    </>
  )
}

export default NotFound