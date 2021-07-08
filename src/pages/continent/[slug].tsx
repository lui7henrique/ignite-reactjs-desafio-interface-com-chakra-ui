import { Flex } from "@chakra-ui/react";
import { Header } from "../../Components/Header";
import { ContinentBanner } from "../../Components/ContinentBanner";
import { Content } from "../../Components/Content";
import { Cities } from "../../Components/Cities";
import { useRouter } from "next/router";
import { continents } from "../../../continents";

export type City = {
  name: string;
  country: string;
  flag: string;
};

export type Continent = {
  name: string;
  image: string;
  path: string;
  description: string;
  countries: number;
  languages: number;
  cities?: City[];
};

export default function Continent() {
  const router = useRouter();
  const currentContinent = router.query.slug;
  const filteredContinent = continents.filter(
    (continent) => continent.path === currentContinent
  );
  const continent = filteredContinent[0];

  return (
    <Flex direction="column">
      <title>{continent?.name}</title>
      <Header />
      <ContinentBanner name={continent?.name} image={continent?.image} />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content
          description={continent?.description}
          countries={continent?.countries}
          languages={continent?.languages}
          cities={continent?.cities}
        />
        <Cities cities={continent?.cities} />
      </Flex>
    </Flex>
  );
}
