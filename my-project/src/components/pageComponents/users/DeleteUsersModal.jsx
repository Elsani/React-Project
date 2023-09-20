import { useRef, useState } from 'react'
import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Button,
    FormLabel,
    FormControl,
    ModalFooter,
    Input,
    Spinner,
 } from '@chakra-ui/'
  import { deleteUser } from '../../../utils/api/users'


export const DeleteUserModal  = ({ isOpen, onClose, userId }) => {
  const toast = useToast()


    const submitForm = () =>  {
        const submitForm = async () => {
            const response = await deleteUser(userId)
            console.log(response)
        }
       
    }

    const initialRef =  useRef(null)
    const finalRef = useRef(null)

  return function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    if(isLoading) {
      return <Spinner /> 
    }
  
    return (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete User</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              Are you sure you want to delete user with ID: {userId}
            </ModalBody>
  
            <ModalFooter>
              <Button 
              colorScheme='blue'
              mr={3}
              onClick={submitForm}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }
}
