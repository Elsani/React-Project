import { sidebarItems  } from './sidebarItems'
import {Flex, Text, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
     <Box  
        mt='20' 
        borderColor='gray.200' 
        rounded='md'>
        {sidebarItems.map(item => {
            <Link to={item.path}>
                <Flex 
                key={item.name}
                gap='4'
                p='4'
                rounded='md'
                my='2'         
                _hover={{
                   background: 'gray.100',
                   color: 'teal.500',
                   cursor:'pointer',
                }}
                >
                    {item.icon} <Text fontSize='lg'>{item.name}</Text>
                    </Flex>
                </Link>
            })}
        </Box>
    )
}
