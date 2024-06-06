import { Box, Table, Thead, Tbody, Tr, Th, Td, Icon, Text, Avatar, VStack } from "@chakra-ui/react";
import { FaStar, FaFileExcel, FaFileArchive, FaFileWord, FaFileVideo, FaFilePowerpoint } from "react-icons/fa";

const FileTable = () => {
  return (
    <Box bg="white" p="4" borderRadius="md" boxShadow="sm">
      <Text fontSize="lg" fontWeight="bold" mb="4">Favorite</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>File size</Th>
            <Th>Last modified</Th>
            <Th>Owner name</Th>
            <Th>Who can access</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td><Icon as={FaStar} color="yellow.400" mr="2" /><Icon as={FaFileExcel} color="green.500" mr="2" />Budget Trip.xlsx</Td>
            <Td>3.6 MB</Td>
            <Td>18/05/2023 6:27 AM</Td>
            <Td><Avatar size="sm" name="Me" /> Me</Td>
            <Td>Only me</Td>
          </Tr>
          <Tr>
            <Td><Icon as={FaStar} color="yellow.400" mr="2" /><Icon as={FaFileArchive} color="blue.500" mr="2" />Website Code.zip</Td>
            <Td>12 KB</Td>
            <Td>19/05/2023 3:45 PM</Td>
            <Td><Avatar size="sm" name="Hilya Nur" /> Hilya Nur</Td>
            <Td>Anyone with the link</Td>
          </Tr>
        </Tbody>
      </Table>
      <Text fontSize="lg" fontWeight="bold" mt="8" mb="4">Recents</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>File size</Th>
            <Th>Last modified</Th>
            <Th>Owner name</Th>
            <Th>Who can access</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td><Icon as={FaFileWord} color="blue.500" mr="2" />Design Brief.docx</Td>
            <Td>7.2 MB</Td>
            <Td>10/07/2023 3:16 PM</Td>
            <Td><Avatar size="sm" name="Sandy Fauzi" /> Sandy Fauzi</Td>
            <Td>Anyone with the link</Td>
          </Tr>
          <Tr>
            <Td><Icon as={FaFileVideo} color="red.500" mr="2" />Ciwidey Trip.mp4</Td>
            <Td>1.2 GB</Td>
            <Td>18/05/2023 7:18 AM</Td>
            <Td><Avatar size="sm" name="Yahya Adam" /> Yahya Adam</Td>
            <Td>Specific users</Td>
          </Tr>
          <Tr>
            <Td><Icon as={FaFilePowerpoint} color="orange.500" mr="2" />Demo Apps.pptx</Td>
            <Td>8.6 MB</Td>
            <Td>29/04/2023 6:27 AM</Td>
            <Td><Avatar size="sm" name="Ihsan Al Ghifar" /> Ihsan Al Ghifar</Td>
            <Td>Anyone with the link</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default FileTable;