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
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Locals = ({ gomiAmount }) => {
  const [gomiColor, setGomiColor] = useState("");

  useEffect(() => {
    if (gomiAmount == 0) {
      setGomiColor("#c8bcb9");
    } else if (gomiAmount == 25) {
      setGomiColor("#1DB577");
    } else if (gomiAmount == 50) {
      setGomiColor("#edc70a");
    } else if (gomiAmount == 75) {
      setGomiColor("#ED7C0A");
    } else {
      setGomiColor("#ed3f0a");
    }
  }, [gomiAmount]);

  console.log(gomiColor);
  return (
    <Link href="/RubbishPage">
      <Flex
        align="center"
        justify="space-around"
        w="300px"
        py="15px"
        bg="white"
        borderRadius="20px"
      >
        <Box>
          <Text fontSize="18px" fontWeight="semibold">
            1つ目のゴミ箱
          </Text>

          <Flex align="center" my="5px">
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

        <VStack spacing={0}>
          <CircularProgress
            value={gomiAmount}
            thickness="8px"
            size="75px"
            color={gomiColor}
          >
            <CircularProgressLabel w="25px">
              <RubbishBin width="25px" gomiColor={gomiColor} />
            </CircularProgressLabel>
          </CircularProgress>
          <Text fontWeight="bold" pl="10px">
            {gomiAmount}%
          </Text>
        </VStack>
      </Flex>
    </Link>
  );
};

export default Locals;
