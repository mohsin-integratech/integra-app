import { Heading, Text } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

export const AppHeader = () => {
return (
<>
<Heading
fontWeight={800}
fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
lineHeight={'150%'}
>
<br />
<Text as={'span'} color={'blue.400'} fontSize={{ base: '4xl', sm: '6xl', md: '7xl' }}>
Thank you for visiting Integra&apos;s booth at GITEX 2021
</Text>
</Heading>
</>
)
}
