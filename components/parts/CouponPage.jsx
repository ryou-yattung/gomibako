import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import FirCoupon from "../../pages/assets/Coupon01.png";
import SecCoupon from "../../pages/assets/Coupon02.png";

const Coupon = ({ setCouponPageOpen }) => {
  return (
    <VStack w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)" spacing="30px">
      <Text fontSize="20px" color="white" fontWeight="bold" mt="32px">
        使えるクーポン
      </Text>

      <Box pb="30px">
        <Image src={FirCoupon} alt="firCoupon" />
      </Box>

      <Box pb="10px">
        <Image src={SecCoupon} ale="secCoupon" />
      </Box>

      <Flex
        px="16px"
        py="8px"
        bg="white"
        borderRadius="full"
        onClick={() => setCouponPageOpen(false)}
      >
        <FontAwesomeIcon icon={faCircleXmark} width="24px" />
        <Text fontSize="16px" fontWeight="semibold" ml="8px">
          閉じる
        </Text>
      </Flex>
    </VStack>
  );
};

export default Coupon;
