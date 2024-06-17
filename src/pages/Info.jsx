import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";

const Info = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Navbar />
      <Box p={5} bg="gray.50" borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={5}>About This Website</Heading>
        <Text fontSize="md" mb={3}>
          This website is designed to help you manage your notes efficiently. You can create, edit, and delete notes as needed. The search functionality allows you to quickly find the notes you are looking for.
        </Text>
        <Text fontSize="md" mb={3}>
          Our goal is to provide a simple and intuitive interface for managing your notes. We hope you find it useful!
        </Text>
      </Box>
    </Container>
  );
};

export default Info;