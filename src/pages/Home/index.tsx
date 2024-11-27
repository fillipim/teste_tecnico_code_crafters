import React from "react";
import { Box, Flex, Heading, Separator } from "@chakra-ui/react";
import { useBankContext } from "@/hooks/useBank";
import FormModal from "@/components/FormModal";

const Home: React.FC = () => {
  const { banks } = useBankContext();
  console.log(banks);

  return (
    <Box w="50%" m="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" fontWeight={500}>
          Banks Manager
        </Heading>
        <FormModal />
      </Flex>
      <Separator m="1rem 0" />
    </Box>
  );
};

export default Home;
