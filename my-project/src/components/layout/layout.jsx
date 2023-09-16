import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

 const Layout = ({ children }) => {
  return (
  <Flex height="100%">
        <Box 
        height='lg' 
        width='60'
        > 
            <Sidebar />
        </Box>
        <Box flex="1" bg='gray.100'> 
            <Header />
            <Flex px='6' mt='4'>
                {children}
            </Flex>
        </Box>
  </Flex>
  )
}

export default Layout