import { Box } from "@chakra-ui/react";
import React from "react";
import MapGl from "react-map-gl";
import Coupon from "../../pages/assets/Coupon";
import Locals from "../elements/Locals";
import Tag from "../elements/Tag";
import CouponPage from "./CouponPage";

const Map = ({ gomiData }) => {
  const [viewState, setViewState] = React.useState({
    latitude: 34.706542021068344,
    longitude: 135.50324831854138,
    zoom: 15,
  });

  const [couponPageOpen, setCouponPageOpen] = React.useState(false);

  return (
    <Box pos="relative" h="90vh" w="100vw">
      <Box pos="absolute" h="100%" w="100%" zIndex="0">
        <MapGl
          mapStyle="mapbox://styles/tonyleung/cl4s4ijtr000114rm48hycx66"
          mapboxAccessToken="pk.eyJ1IjoidG9ueWxldW5nIiwiYSI6ImNsNHMxZ21qYTBicmQza251NXphNnNudHcifQ.2qstDbOcdkwxjtw3XMPhfg"
          {...viewState}
          onMove={(evt) => setViewState(evt.viewState)}
        ></MapGl>
      </Box>

      <Box bottom="10%" left="5%" pos="absolute" zIndex="10">
        <Coupon onClick={() => setCouponPageOpen(true)} />
        <Tag />

        <Locals gomiAmount={0} />
      </Box>

      <Box
        display={`${couponPageOpen ? "blok" : "none"}`}
        w="100%"
        h="100%"
        pos="absolute"
        top="0"
        zIndex="20"
      >
        <CouponPage setCouponPageOpen={setCouponPageOpen} />
      </Box>
    </Box>
  );
};

export default Map;
