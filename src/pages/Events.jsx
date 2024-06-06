import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td, Icon, Avatar } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { FaCalendarAlt } from "react-icons/fa";

const Events = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.50">
        <Header />
        <Box p="4">
          <Text fontSize="lg" fontWeight="bold" mb="4">Events</Text>
          <Box bg="white" p="4" borderRadius="md" boxShadow="sm">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Event Name</Th>
                  <Th>Date</Th>
                  <Th>Location</Th>
                  <Th>Organizer</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td><Icon as={FaCalendarAlt} color="blue.500" mr="2" />Annual Meeting</Td>
                  <Td>12/12/2023</Td>
                  <Td>New York</Td>
                  <Td><Avatar size="sm" name="John Doe" /> John Doe</Td>
                </Tr>
                <Tr>
                  <Td><Icon as={FaCalendarAlt} color="blue.500" mr="2" />Tech Conference</Td>
                  <Td>05/11/2023</Td>
                  <Td>San Francisco</Td>
                  <Td><Avatar size="sm" name="Jane Smith" /> Jane Smith</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Events;