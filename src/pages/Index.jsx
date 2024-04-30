import { Box, Flex, Text, Heading, Button, Input, Textarea, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { FaCheckCircle, FaEnvelope, FaUser } from 'react-icons/fa';

const Index = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box>
      <Flex direction="column" align="center" m={4}>
        <Heading as="h1" size="2xl" my={5}>
          Welcome to GPT Engineer
        </Heading>
        <Text fontSize="xl" color={textColor}>
          Revolutionizing web development with AI.
        </Text>
      </Flex>

      <VStack spacing={8} p={5}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor}>
          <Heading fontSize="xl">Product Features</Heading>
          <Text mt={4}>Automate your development process with our cutting-edge AI technology.</Text>
          <HStack spacing={4} mt={4}>
            <FaCheckCircle color="green" />
            <Text>Feature One</Text>
          </HStack>
          <HStack spacing={4} mt={2}>
            <FaCheckCircle color="green" />
            <Text>Feature Two</Text>
          </HStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor}>
          <Heading fontSize="xl">Customer Testimonials</Heading>
          <Text mt={4}>"This product has changed the way we develop software!" - Company A</Text>
          <Text mt={2}>"Incredible results, our productivity has doubled!" - Company B</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor}>
          <Heading fontSize="xl">Contact Us</Heading>
          <VStack spacing={3} mt={4}>
            <Flex align="center">
              <FaUser />
              <Input placeholder="Your Name" ml={2} />
            </Flex>
            <Flex align="center">
              <FaEnvelope />
              <Input placeholder="Your Email" ml={2} />
            </Flex>
            <Textarea placeholder="Your Message" />
            <Button colorScheme="blue">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;