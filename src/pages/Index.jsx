import { Box, Container, Heading, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar.jsx";

const notes = [
  {
    title: "lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Mauris condimentum sed ante at sagittis. Suspendisse vitae lacinia purus. Donec a tristique augue, ut egestas velit.",
    lastOpened: "yesterday 16:03",
    bgColor: "green.50",
  },
  {
    title: "lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit.",
    lastOpened: "yesterday 9:03",
    bgColor: "pink.50",
  },
  {
    title: "lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit. Sed venenatis, nunc ut fermentum interdum, quam eros sollicitudin enim, eu porttitor risus enim ut felis. Nunc tellus libero, fringilla eu commodo sit amet, maximus a mauris. Mauris aliquam.",
    lastOpened: "august 20",
    bgColor: "yellow.50",
  },
  {
    title: "lorem ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tristique augue, ut egestas velit.",
    lastOpened: "friday",
    bgColor: "green.50",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Navbar />
      <InputGroup mb={10}>
        <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
        <Input type="text" placeholder="Search notes" />
      </InputGroup>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {notes.map((note, index) => (
          <Box key={index} bg={note.bgColor} p={5} borderRadius="md" boxShadow="md">
            <Heading as="h3" size="md" mb={3}>{note.title}</Heading>
            <Text mb={3}>{note.content}</Text>
            <Text fontSize="sm" color="gray.500">last opened {note.lastOpened}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;