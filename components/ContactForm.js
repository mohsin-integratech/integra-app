import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { API } from "aws-amplify"
import { createCandidate } from '../src/graphql/mutations'

export const ContactForm = ({ initialRef, onClose }) => {
  const toast = useToast()
  const [formState, setFormState] = useState({
    name: '',
    designation: '',
    companyname: '',
    email: '',
    phone: '',
    comments: '',
  })

  const handleContactFormSubmit = async (e) => {
    e.preventDefault()
    const { name, designation, companyname, email, phone, comments} = formState
    if (name && designation && companyname && email && phone && comments) {
      try {
        await API.graphql({
          query: createCandidate,
          variables: {
            input: {
              name,
              designation,
              companyname,
              email,
              phone,
              comments,
            },
          },
        })

        toast({
          title: 'Congratulations',
          position: 'top-right',
          description: 'Successfully submitted!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        onClose()
      } catch (e) {
        toast({
          title: 'Error',
          position: 'top-right',
          description: e.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } else {
      toast({
        title: 'Uh-Oh 😥',
        position: 'top-right',
        description: 'Please verify all fields are filled out.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <>
      <ModalHeader>Enter Your Details</ModalHeader>
      <ModalCloseButton />
      <form onSubmit={handleContactFormSubmit}>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              ref={initialRef}
              placeholder=""
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Designation</FormLabel>
            <Input
              placeholder=""
              value={formState.designation}
              onChange={(e) =>
                setFormState({ ...formState, designation: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Company Name</FormLabel>
            <Input
              placeholder=""
              value={formState.companyname}
              onChange={(e) =>
                setFormState({ ...formState, companyname: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder=""
              type="email"              
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder=""
              minLength="10"
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
            />
          </FormControl>

          <FormControl mt={4} >
            <FormLabel>Comments</FormLabel>
            <Input
              placeholder=""
              value={formState.comments}
              onChange={(e) =>
                setFormState({ ...formState, comments: e.target.value })
              }
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} type="submit">
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    </>
  )
}
