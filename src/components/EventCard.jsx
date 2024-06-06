import { Box, Text, Avatar, Icon } from "@chakra-ui/react";
import { FaCalendarAlt } from "react-icons/fa";

const EventCard = ({ eventName, date, location, organizer }) => {
  return (
    <Box bg="white" p="4" borderRadius="md" boxShadow="sm" textAlign="center" mb="4">
      <Icon as={FaCalendarAlt} color="blue.500" boxSize="6" mb="2" />
      <Text fontSize="lg" fontWeight="bold" mb="2">{eventName}</Text>
      <Text>{date}</Text>
      <Text>{location}</Text>
      <Box mt="2">
        <Avatar size="sm" name={organizer} />
        <Text>{organizer}</Text>
      </Box>
    </Box>
  );
};

export default EventCard;