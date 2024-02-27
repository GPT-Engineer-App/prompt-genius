import React from "react";
import { Box, Container, VStack, Heading, Text, Button, Input, useToast, Image, HStack, Icon } from "@chakra-ui/react";
import { FaPlus, FaRegBuilding, FaLaptopCode, FaRocket } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // This is where you would handle the form submission, e.g., sending data to a server
    toast({
      title: "Form submitted.",
      description: "We've received your form submission and will be in touch soon.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="section" mt={10} textAlign="center">
        <Heading as="h1" size="2xl">
          Prompt Builder
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Building great websites with ease and speed!
        </Text>
        <Image src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzA5MDIzMzU4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Website building" />

        <Box as="form" onSubmit={handleFormSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Your Name" isRequired />
            <Input placeholder="Email Address" isRequired type="email" />
            <Input type="file" p={1} />
            <Button leftIcon={<FaPlus />} colorScheme="blue" size="lg" type="submit">
              Get Started
            </Button>
          </VStack>
        </Box>
      </VStack>

      <VStack spacing={16} as="section" py={20}>
        <Heading as="h2" size="xl">
          Services
        </Heading>
        <HStack spacing={10} align="stretch">
          <VStack spacing={4} width="33%">
            <Icon as={FaRegBuilding} w={10} h={10} color="blue.500" />
            <Heading as="h3" size="md">
              Enterprise Solutions
            </Heading>
            <Text color="gray.600">Customized platforms for large-scale businesses to streamline operations.</Text>
          </VStack>
          <VStack spacing={4} width="33%">
            <Icon as={FaLaptopCode} w={10} h={10} color="green.500" />
            <Heading as="h3" size="md">
              Web Development
            </Heading>
            <Text color="gray.600">Responsive, modern, and accessible web applications for all devices.</Text>
          </VStack>
          <VStack spacing={4} width="33%">
            <Icon as={FaRocket} w={10} h={10} color="purple.500" />
            <Heading as="h3" size="md">
              Launch & Grow
            </Heading>
            <Text color="gray.600">Strategies to help you launch your online presence and grow your brand.</Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack spacing={16} as="section" py={20} textAlign="center">
        <Heading as="h2" size="xl">
          Our Work
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Take a look at some of the projects we've crafted for our amazing clients.
        </Text>
        <Image src="https://via.placeholder.com/600x300?text=Example+Project" alt="Example of work" borderRadius="md" />
      </VStack>

      <VStack as="footer" spacing={4} pt={10} pb={10} borderTop="1px" borderColor="gray.200">
        <Text>&copy; {new Date().getFullYear()} Prompt Builder. All rights reserved.</Text>
      </VStack>
    </Container>
  );
};

export default Index;
