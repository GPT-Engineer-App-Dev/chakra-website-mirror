import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FileCard from "../components/FileCard";
import FileTable from "../components/FileTable";

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.50">
        <Header />
        <Box p="4">
          <Text fontSize="lg" fontWeight="bold" mb="4">All Files</Text>
          <Flex justify="space-between" mb="8">
            <FileCard name="My Files" />
            <FileCard name="Team Folder" />
            <FileCard name="References" />
            <FileCard name="Documents" />
          </Flex>
          <FileTable />
        </Box>
      </Box>
    </Flex>
  );
};

export default Index;