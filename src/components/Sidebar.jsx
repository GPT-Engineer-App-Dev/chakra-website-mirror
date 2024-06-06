import { Box, VStack, Text, Button, Icon, Divider } from "@chakra-ui/react";
import { FaFolder, FaStar, FaClock, FaShareAlt, FaTrash, FaCog, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Box bg="blue.900" color="white" w="250px" p="4" minH="100vh">
      <Text fontSize="xl" fontWeight="bold" mb="4">Cloud Storage</Text>
      <VStack align="start" spacing="4">
        <Box>
          <Text fontSize="md" fontWeight="bold" mb="2">All Files</Text>
          <VStack align="start" spacing="2" pl="4">
            <Text>My Files</Text>
            <Text>Team Folder</Text>
            <Text>References</Text>
            <Text>Documents</Text>
          </VStack>
        </Box>
        <Divider borderColor="whiteAlpha.400" />
        <Box>
          <VStack align="start" spacing="4">
            <Box display="flex" alignItems="center">
              <Icon as={FaStar} mr="2" />
              <Text>Favorite</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Icon as={FaClock} mr="2" />
              <Text>Recents</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Icon as={FaShareAlt} mr="2" />
              <Text>Shared with me</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Icon as={FaTrash} mr="2" />
              <Text>Deleted files</Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Icon as={FaCog} mr="2" />
              <Text>Settings</Text>
            </Box>
          </VStack>
        </Box>
        <Divider borderColor="whiteAlpha.400" />
        <Button leftIcon={<FaPlus />} colorScheme="blue" variant="solid" w="full">
          Create new
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;