import { useRef } from 'react'

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

 } from '@chakra-ui/react'


export const EditUserModal  = ({isOpen,onClose, userId}) => {
  const {} = useFetch()

  
     const {
      register,
      formState: { errors },
      handlesubmit,
      getValues,  
    } = useForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
    })

    const submitForm = formValue => {

    }
    const initialRef =  useRef(null)
    const finalRef = useRef(null)

  return function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' {...register('firstName')} />
               </FormControl>
               <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' {...register('lastName')} />
               </FormControl>
               <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input type='email' placeholder='email' {...register('email')} />
               </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button 
              colorScheme='blue'
              mr={3}
              onClick={handlesubmit(submitForm)}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }
}
