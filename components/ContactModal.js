import {
Button,
Box,
Text,
createIcon,
Icon,
useColorModeValue,
Modal,
ModalOverlay,
ModalContent,
useDisclosure,
Stack,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { ContactForm } from './ContactForm'

export const ContactModal = () => {
const { isOpen, onOpen, onClose } = useDisclosure()

const initialRef = useRef()

return (
<>
<Stack
direction={'column'}
spacing={3}
align={'center'}
alignSelf={'center'}
position={'relative'}
>
<Button
colorScheme={'green'}
bg={'green.400'}
rounded={'full'}
px={6}
_hover={{
bg: 'green.500',
}}
onClick={onOpen}
>
Register Here
</Button> 

<Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>
<ContactForm initialRef={initialRef} onClose={onClose} />
</ModalContent>
</Modal>
</Stack>
</>
)
}
