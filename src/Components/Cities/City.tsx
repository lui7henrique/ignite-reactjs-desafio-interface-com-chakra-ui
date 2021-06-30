import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { City as CityType } from "../../pages/continent/[slug]";

export function City({ name, country, flag }: CityType) {
  return (
    <Box borderRadius="4px" overflow="hidden" boxShadow="lg">
      <Image
        src={`/cities/${name}.jpg`}
        alt={name}
        h="170px"
        w="100%"
        objectFit="cover"
      />
      <Flex p="6" align="center" justify="space-between" bg="white">
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            {name}
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>
        <Image
          src={`/flags/${flag}.png`}
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}
