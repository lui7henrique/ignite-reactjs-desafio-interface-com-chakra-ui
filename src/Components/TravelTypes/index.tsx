import { Grid, GridItem } from "@chakra-ui/react";
import { Type as TypeTravel } from "../TravelTypes/Type";

export function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <TypeTravel icon="Nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TypeTravel icon="Beach" text="praia" />
      </GridItem>
      <GridItem>
        <TypeTravel icon="Modern" text="moderno" />
      </GridItem>
      <GridItem>
        <TypeTravel icon="Classic" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TypeTravel icon="More" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
