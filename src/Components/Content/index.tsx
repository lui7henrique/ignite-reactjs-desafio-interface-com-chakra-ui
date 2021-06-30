import { Grid, Text } from "@chakra-ui/react";
import { Continent, City } from "../../pages/continent/[slug]";
import { Infos } from "./Infos";

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
