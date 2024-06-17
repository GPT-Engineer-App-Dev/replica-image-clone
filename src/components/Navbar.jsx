import { Flex, Heading, Avatar, IconButton, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import notesLogo from "../../public/images/notes-logo.png";

const Navbar = () => {
  return (
    <Flex justify="space-between" align="center" mb={10} p={5} bg="gray.100">
      <Flex align="center">
        <img src={notesLogo} alt="Notes Logo" width="50" height="50" />
        <Heading as="h1" size="lg" ml={3} color="purple.500">
          <Link to="/">Notes</Link>
        </Heading>
      </Flex>
      <Flex align="center">
        <Text mr={4}>Puneet Shakya</Text>
        <Avatar name="Puneet Shakya" src="https://bit.ly/broken-link" />
        <IconButton aria-label="Menu" icon={<HamburgerIcon />} ml={4} />
      </Flex>
    </Flex>
  );
};

export default Navbar;