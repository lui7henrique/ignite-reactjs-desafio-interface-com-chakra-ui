import { Flex, Heading } from "@chakra-ui/react";
import { Header } from "../Components/Header";
import { Banner } from "../Components/Banner";
import { TravelTypes } from "../Components/TravelTypes";
import { Divider } from "../Components/Divider";
import { Slider } from "../Components/Slider";

export default function Home() {
  return (
    <Flex direction="column">
      <title>WorldTrip | Home</title>

      <Header />
      <Banner />
      <TravelTypes />
      <Divider />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3lx", "4xl"]}
      >
        Vamos nessa? <br /> Então escolha seu continente 🤗
      </Heading>
      <Slider />
    </Flex>
  );
}
