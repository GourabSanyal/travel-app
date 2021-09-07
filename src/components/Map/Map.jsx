import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobole = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div>
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyClFOyxxUmjAQzd7oBYwmOhafdL5b1Or0U" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={""}
          onChange={""}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
