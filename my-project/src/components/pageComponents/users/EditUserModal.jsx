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
    useToast,
    FormErrorMessage,
 } from '@chakra-ui/react'

  import { useForm } from 'react-hook-form'
  import { updateUser } from '../../../utils/api/users'


export const EditUserModal  = ({isOpen, onClose, userId }) => {
  const toast = useToast()

     const {
      register,
      formState: { errors },
      handleSubmit,
      getValues,  
    } = useForm({
      defaultValues: async () => {
        const response = await fetch(
          `https//dummyjson.com/users/${userId}`)
           const { firstName, lastName, email } = await response.json()
           return {
           firstName,
            lastName,
            email

          }
      },

    
      mode: 'onChange',
    })


 

    const submitForm = async formData => {
      const response =  await updateUser(userId, formData)
      if(Object.keys(response.length > 0 ))
        toast({
          title: 'User Edited.',
          description: `User with id ${response.id} and name ${response.firstName} has been
          edited `,
          status: 'succes',
          duration: 9000,
          isCloseable: true,
        })
        onClose() 
    }
    const initialRef =  useRef(null)
    const finalRef = useRef(null)

  // return function InitialFocus() {
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  
  //   const initialRef = React.useRef(null)
  //   const finalRef = React.useRef(null)

  //   if(isLoading) {
  //     return <Spinner /> 
  //   }
  
    return (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isInvalid={!!errors.firstName} isRequired>
                <FormLabel>First name</FormLabel>
                <Input 
                ref={initialRef} 
                placeholder='First name' 
                {...register('firstName',{
                required: 'first name is required',
                minLength: {
                  value:5,
                  message: 'minimum 5 characters',
                },
                maxLength: {
                  value:10,
                  message: 'maximum characters allowed is 10',
                },
                }
                )}
                 />
                 <FormErrorMessage>
                  {errors?.firstName?.message}
                  </FormErrorMessage>
               </FormControl>
               <FormControl>
               <FormControl isInvalid={!!errors.lastName} isRequired></FormControl>
                <FormLabel>Last name</FormLabel>
                <Input 
                placeholder='Last name'
                 {...register('lastName',{
                  required: 'last name is required',
                minLength: {
                  value:5,
                  message: 'minimum 5 characters',
                },
                maxLength: {
                  value:10,
                  message: 'maximum characters allowed is 10',
                },
                 })} 
                 />
               </FormControl>
               <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input 
                type='email' 
                placeholder='email'
                 {...register('email', {
                  required: 'Email is required',
                 })} 
                 />
               <FormErrorMessage>
                {errors?.email?.message}
               </FormErrorMessage>
               </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button 
              colorScheme='blue'
              mr={3}
              onClick={handleSubmit(submitForm)}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }

