import {Flex,
         Heading,
         Menu,
         MenuButton,
         MenuList,
         MenuItem,
         IconButton,
         } from '@chakra-ui/react'
         import MenuIcon from '@mui/icons-material/Menu'
export const Header = () => {
  return (
    <Flex 
    bg='blue.400' 
    padding='2' 
    justifyContent='space-between' 
    mx='6'
    alignItems='center'> 
            <Heading size='md' color='gray.600'> My Application</Heading>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<MenuIcon />}
                    variant='outline'
                    />
                    <MenuList>
                        <MenuItem command='⌘T'>Profile</MenuItem>
                    </MenuList>
            </Menu>
            </Flex>
  )
}
