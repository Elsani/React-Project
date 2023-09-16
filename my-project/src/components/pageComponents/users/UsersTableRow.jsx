import { 
  Tr,
  Td,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,

 } from '@chakra-ui/react'

 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const UsersTableRow = ({
    id,
    firstName,
    lastName,
    department,
}) => {
  return (
  <Tr>
  <Td>{id}</Td>
  <Td>{firstName}</Td>
  <Td>{lastName}</Td>
  <Td>{department}</Td>
  <Td > 
    <Flex float='right'>
    <Menu>
      <MenuButton 
      as={Button} 
      rightIcon={<ExpandMoreIcon />}
      bg='0'
      rounded='full'
      >
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    </Menu>
    </Flex>
</Td>
</Tr>
)
}
