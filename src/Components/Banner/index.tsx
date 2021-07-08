import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/assets/banner.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes, <br /> infinitas possisiblidades.
          </Heading>
          <Text
            color="gray.300"
            mt="5"
            fontSize={["0.8rem", "xl"]}
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>
        </Box>

        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/assets/Airplane.svg"
          alt="Avião"
          transform="translateY(48px)"
          ml="8px"
        />
      </Flex>
    </Flex>
  );
}
