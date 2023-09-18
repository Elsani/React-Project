import {useState, Fragment } from 'react'
import { 
  Tr,
  Thead,
  TableContainer,
  Th,
  Table,
  Tbody,
  Spinner,
  Heading,
  useDisclosure,
 } from '@chakra-ui/react'

import { UsersTableRow } from './UsersTableRow'
import { EditUserModal } from './EditUserModal'
import { useFetch } from '../../../hooks/useFetch'

export const UsersTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [userId, setUserId] = useState('')
  const { data, isLoading, error } = useFetch('users')


  const handleEditClick = (id) => {
      setUserId(id)
    console.log(userId)
  }

  if(isLoading) return <Spinner />
  if(error) return <Heading>{error}</Heading>
  
  return (

    <Fragment>
       <TableContainer 
  bg='white' 
  mt='6' 
  rounded='md' 
  height='sm' 
  overflowY="auto"
  css= {{
    '&::-webkit-scrollbar':{
      width: '4px',
    },
    '&::-webkit-scrollbar-track':{
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb':{
      background: 'blue',
      borderRadius: '24px',
    },

  }}
  >
  <Table variant='simple' size='sm'>
    <Thead>
      <Tr>
        <Th>id</Th>
        <Th>first name</Th>
        <Th>last name</Th>
        <Th>department</Th>
        <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.users.map(user => {
        return (
          <UsersTableRow
          key={user.id}
          id={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          department={user.company.department}
          />
        )
      })}
        </Tbody>
        </Table>
      </TableContainer>
      {isOpen && <EditUserModal isOpen={isOpen} onClose={onclose} userId={userId} />}
    </Fragment>
 

  )
}
