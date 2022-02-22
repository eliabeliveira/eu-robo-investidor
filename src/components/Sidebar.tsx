import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiAndroidFill, RiBilibiliFill, RiCustomerService2Line, RiDashboardFill, RiDashboardLine, RiDonutChartFill, RiPieChart2Fill, RiQuestionnaireFill } from "react-icons/ri";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="4" mt="8" align="flex-start">
        <Link display="flex" alignItems="center" _hover={{color: 'pink.500'}}>
          <Icon as={RiDashboardFill} fontSize="20" />
          <Text ml="4" fontWeight="medium">Dashboard</Text>
        </Link>
        <Link display="flex" alignItems="center" _hover={{color: 'pink.500'}}>
          <Icon as={RiAndroidFill} fontSize="20" />
          <Text ml="4" fontWeight="medium">Robos</Text>
        </Link>
        <Link display="flex" alignItems="center" _hover={{color: 'pink.500'}}>
          <Icon as={RiPieChart2Fill} fontSize="20" />
          <Text ml="4" fontWeight="medium">Relatorios</Text>
        </Link>
        <Link display="flex" alignItems="center" _hover={{color: 'pink.500'}}>
          <Icon as={RiQuestionnaireFill} fontSize="20" />
          <Text ml="4" fontWeight="medium">Ajuda</Text>
        </Link>
      </Stack>
    </Box>
  )
}