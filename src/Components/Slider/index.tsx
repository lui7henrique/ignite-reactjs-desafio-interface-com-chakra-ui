import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { continents } from "../../../continents";
import { Continent } from "../../pages/continent/[slug]";

SwiperCore.use([Navigation, Pagination, A11y]);

export function Slider() {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{
          width: "100%",
          flex: "1",
        }}
      >
        {continents.map((continent: Continent) => {
          return (
            <SwiperSlide key={continent.name}>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={`url('/slider/${continent.image}')`}
                bgPosition="100% 70%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                filter="brightness(0.8)"
              >
                <Link href={`/continent/${continent.path}`}>
                  <a>
                    <Heading
                      fontSize={["3xl", "4xl", "5xl"]}
                      color="gray.100"
                      fontWeight="bold"
                    >
                      {continent.name}
                    </Heading>
                    <Text
                      fontWeight="bold"
                      color="gray.300"
                      fontSize={["0.8rem", "1xl", "2xl"]}
                      mt={["2", "4"]}
                      maxW="800px"
                    >
                      {continent.description}
                    </Text>
                  </a>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
