import React, { useEffect, useState } from "react";
import axios from "axios";
import FallBackFactory from "../FallBacks/FallBackFactory";

const server_url = import.meta.env.VITE_SERVER;

const Venue = ({ venueid }) => {
  const [venue, setvenue] = useState();
  const [fallback, set_fallback] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${server_url}/venues/${venueid}`);
      if (response.status === 200) {
        setvenue(response.data[0]);
      }

      if (
        response.status === 206 &&
        response.data.massage === "daily request limit"
      )
        set_fallback("dailyfallback");
      if (
        response.status === 206 &&
        response.data.massage === "minutely request limit"
      )
        set_fallback("minutelyfallback");
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="text-white pos-relative display-flex justify-center flex-cols row-gap-1">
        <span>{venue?.name}</span>
        <span>
          {venue?.address} , {venue?.city} ,{venue?.country}{" "}
        </span>
        <span> Seats : {venue?.capacity}</span>
        <img src={venue?.image}></img>
      </div>
      {fallback && <FallBackFactory type={fallback} />}
    </>
  );
};

export default Venue;
