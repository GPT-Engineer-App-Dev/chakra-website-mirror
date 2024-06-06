import { Box, Text, Image } from "@chakra-ui/react";

const FileCard = ({ name }) => {
  return (
    <Box bg="white" p="4" borderRadius="md" boxShadow="sm" textAlign="center">
      <Image src="/folder-icon.png" alt="Folder Icon" mb="2" />
      <Text>{name}</Text>
    </Box>
  );
};

export default FileCard;