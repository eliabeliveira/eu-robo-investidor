import { Button, Flex, Input, InputGroup, InputLeftElement, VStack, Text, IconButton, InputRightElement } from "@chakra-ui/react";

import { EmailIcon, UnlockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from "react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        w="100%"
        maxW={936}
        align="center"
        justify="center"
      >
        <Text
          fontSize="5xl"
          fontWeight="bold"
          w="100%"
        > 
          Faça seu login na plataforma
        </Text>
        <Flex
          as="form"
          bg="gray.800"
          p="16"
          borderRadius={8}
          flexDir="column"
          w="100%"
        > 
          <VStack spacing="4">
            <InputGroup>
              <InputLeftElement 
                pointerEvents="none"
                children={<EmailIcon color="gray.600" />}
              />
              <Input 
                name="email" 
                type="email" 
                placeholder="E-mail" 
                bg="gray.900"
                focusBorderColor="pink.500" 
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement 
                pointerEvents="none"
                children={<UnlockIcon color="gray.600" />}
              />
              <Input 
                name="password" 
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha" 
                bg="gray.900" 
                focusBorderColor="pink.500" 
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
              />
              <InputRightElement>
                <IconButton 
                  aria-label="Show Password"
                  icon={showPassword ? <ViewOffIcon color="pink.400"/> : <ViewIcon color="gray.600"/>}
                  onClick={handleShowPassword}
                  bg="none"
                  _hover={{
                    bgColor: 'gray.900'
                  }}
                />
              </InputRightElement>
            </InputGroup>
          </VStack>

          <Button 
            type="submit" 
            colorScheme="pink" 
            mt="6"
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
