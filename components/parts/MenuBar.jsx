import { Box, Flex } from "@chakra-ui/react";
import {
  faCircleQuestion,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Logo from "../../pages/assets/Logo";

const MenuBar = () => {
  return (
    <Flex
      w="90vw"
      h="10vh"
      m="auto"
      align="center"
      justify="space-between"
      pt="10px"
    >
      <Link href="/About">
        <FontAwesomeIcon icon={faCircleQuestion} color="#ED7C0A" width="30px" />
      </Link>

      <Link href="/">
        <Logo />
      </Link>

      <Link href="/RubbishPage">
        <FontAwesomeIcon icon={faMapLocationDot} color="#ED7C0A" width="30px" />
      </Link>
    </Flex>
  );
};

export default MenuBar;
