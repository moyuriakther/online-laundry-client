import React from "react";
import Iframe from "react-iframe";

const Map = () => {
  return (
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.444766717951!2d90.3884859912572!3d23.750357319861134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e67bbf977%3A0xad83526c894485f0!2sCity%20University!5e0!3m2!1sen!2sbd!4v1638507761759!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      />
  );
};

export default Map;