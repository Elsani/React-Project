import { Box, Flex } from '@chakra-ui/react'

export const UsersHeader  = () => {
  return (
    <Flex py='10' rounded='md' bg='white' boxShadow='md'>
      <Box pl='2'>
        <input variant='filled' placeholder='Search Users' />
      </Box>
        Header</Flex> 
  )
}
