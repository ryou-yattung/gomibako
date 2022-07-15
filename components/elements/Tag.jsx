import { Flex } from "@chakra-ui/react";
import { faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tag = () => {
  return (
    <Flex
      w="155px"
      align="center"
      justify="space-around"
      mb="13px"
      px={2}
      py={1}
      fontWeight="semibold"
      bg="#1DB577"
      color="white"
      borderRadius="md"
    >
      <FontAwesomeIcon icon={faSignsPost} width="15px" />
      1番近いゴミ箱
    </Flex>
  );
};

export default Tag;
