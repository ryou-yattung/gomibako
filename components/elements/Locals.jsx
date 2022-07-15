import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  faPersonWalking,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import MapLogo from "../../pages/assets/MapLogo";
import RubbishBin from "../../pages/assets/RubbishBin";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const Locals = () => {
  return (
    <Link href="/RubbishPage">
      <Flex
        align="center"
        justify="space-around"
        w="300px"
        py="20px"
        bg="white"
        borderRadius="20px"
      >
        <Box>
          <Text mb="3px" fontSize="18px" fontWeight="semibold">
            1つ目のゴミ箱
          </Text>

          <Flex align="center" mb="8px">
            <MapLogo />
            <Text ml="5px" opacity="50%" fontSize="12px">
              神奈川県横浜市
            </Text>
          </Flex>

          <Flex>
            <Flex mr="20px">
              <FontAwesomeIcon
                icon={faPersonWalking}
                color="#0f774d"
                width={15}
              />
              <Text ml="7.5px" fontSize="16px" fontWeight="semibold">
                1K
              </Text>
            </Flex>

            <Flex>
              <FontAwesomeIcon icon={faStopwatch} color="#0f774d" width={15} />
              <Text ml="7.5px" fontSize="16px" fontWeight="semibold">
                1m
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Center>
          <CircularProgress
            value={80}
            thickness="8px"
            size="80px"
            color="#ED7C0A"
          >
            <CircularProgressLabel w="30px">
              <RubbishBin width="30px" fill="#323333" />
            </CircularProgressLabel>
          </CircularProgress>
        </Center>
      </Flex>
    </Link>
  );
};

export default Locals;
