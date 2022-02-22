import { Avatar, Box, Flex, HStack, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        Logo
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex
        align="center"
        ml="auto"
      > 
        <HStack spacing="8" mx="8" pr="8" py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Wellington Junior</Text>
            <Text color="gray.300" fontSize="small">well.silvaa97@gmail.com</Text>
          </Box>

          <Avatar size="md" name="Wellignton Junior" src="https://media-exp1.licdn.com/dms/image/C4D03AQGPomDxo5ZB2Q/profile-displayphoto-shrink_800_800/0/1619567096749?e=1651104000&v=beta&t=DM5iC29wmuUT_zxoMI7X_QNegbPdTJFASf9gp3VH5es" />
        </Flex>
      </Flex>
    </Flex>
  )
}