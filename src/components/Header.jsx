import { Box, Flex, Text, Input, IconButton, Icon } from "@chakra-ui/react";
import { FaSearch, FaThList, FaThLarge } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="gray.50" p="4" borderBottom="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <Text fontSize="2xl" fontWeight="bold">Welcome back Sandy</Text>
        <Flex align="center">
          <Input placeholder="Type to search..." size="md" mr="4" />
          <IconButton aria-label="List view" icon={<FaThList />} size="md" mr="2" />
          <IconButton aria-label="Grid view" icon={<FaThLarge />} size="md" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;