import { sidebarItems  } from './sidebarItems'
import {Flex, Text, Box } from '@chakra-ui/react'

export const Sidebar = () => {
    return (
     <Box  
        mt='20' 
        border='1px' 
        borderColor='gray.200' 
        rounded='md'
        >

        {sidebarItems.map(item => {
            return (
                <Flex key={item.name}
                gap='4'
                 p='4'
                 rounded='md'
                 my='2'         
                 _hover={{
                    background: 'gray.100',
                    color: 'teal.500',
                }}>
                    {item.icon} <Text fontSize='lg'> {item.name}</Text>
                </Flex>     
            )
        })}
    </Box>
    )
}
