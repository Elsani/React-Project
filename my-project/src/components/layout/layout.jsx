import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'

 const Layout = ({children}) => {
  return (
  <Flex >
        <Box height='xl' bg='white' width='xs'> 
            <Sidebar />
        </Box>
        <Box flex="1" bg='gray.100'> 
            <Flex bg='orange'>Header</Flex>
            <Flex bg='green'>{children}</Flex>
        </Box>
        <Box>  Sidebar</Box>
  </Flex>
  )
}

export default Layout