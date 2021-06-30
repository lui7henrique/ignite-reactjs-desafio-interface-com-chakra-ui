import { Grid, Text } from "@chakra-ui/react";
import { Infos } from "./Infos";

export type City = {
  name: string;
  country: string;
  flag: string;
};

type Continent = {
  description: string;
  countries: number;
  languages: number;
  cities: City[];
};

export function Content({
  description,
  countries,
  languages,
  cities,
}: Continent) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {description}
      </Text>
      <Infos countries={countries} languages={languages} cities={cities} />
    </Grid>
  );
}
