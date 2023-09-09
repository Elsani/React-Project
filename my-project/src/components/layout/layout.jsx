import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import {Header} from './Header'

 const Layout = ({ children }) => {
  return (
  <Flex >
        <Box height='xl' bg='white' width='xs'> 
            <Sidebar />
        </Box>
        <Box flex="1" bg='gray.100'> 
            <Header />
            <Flex bg='green'>{children}</Flex>
        </Box>
  </Flex>
  )
}

export default Layout