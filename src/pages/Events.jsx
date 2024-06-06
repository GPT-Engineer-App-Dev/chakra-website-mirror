import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import EventCard from "../components/EventCard";

const Events = () => {
  const events = [
    { eventName: "Annual Meeting", date: "12/12/2023", location: "New York", organizer: "John Doe" },
    { eventName: "Tech Conference", date: "05/11/2023", location: "San Francisco", organizer: "Jane Smith" },
  ];

  return (
    <Flex>
      <Sidebar />
      <Box flex="1" bg="gray.50">
        <Header />
        <Box p="4">
          <Text fontSize="lg" fontWeight="bold" mb="4">Events</Text>
          <Flex direction="column">
            {events.map((event, index) => (
              <EventCard
                key={index}
                eventName={event.eventName}
                date={event.date}
                location={event.location}
                organizer={event.organizer}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Events;