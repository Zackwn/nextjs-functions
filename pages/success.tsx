import { Flex, Image, Text } from '@chakra-ui/core'
import React from 'react'

const Success: React.FC = () => {
  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="div"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%"
        maxW="400px"
      >
        <Image marginBottom={8} src="/rocketseat.svg" alt="Rocketseat" />

        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Successfully subscribed!
        </Text>
      </Flex>
    </Flex>
  )
}

export default Success