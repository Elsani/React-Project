import { sidebarItems  } from './sidebarItems'
import {Flex, Text, Box } from '@chakra-ui/react'

export const Sidebar = () => {
    return (
     <Box  mx='5' mt='20'>
        {sidebarItems.map(item => {
            return (
                <Flex key={item.name} p='4' border='2px' rounded='md' my='2'>
                    {item.icon} <Text> {item.name}</Text>
                </Flex>     
            )
        })}
    </Box>
    )
}
