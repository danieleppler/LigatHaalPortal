import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DailyReqFallback,
  MinutleyReqFallback,
} from "../FallBacks/RequestsFallback";
import FallBackFactory from "../FallBacks/FallBackFactory";

const Fixtures = ({ team_id }) => {
  const [fixtures, set_fixtures] = useState([]);
  const [fallback, set_fallback] = useState("");

  const server_url = import.meta.env.VITE_SERVER;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${server_url}/Fixtures/${team_id}`);
      if (response.status === 200) set_fixtures(response.data);
      if (
        response.status === 206 &&
        response.data.massage === "daily request limit"
      )
        set_fallback("dailyfallback");
      if (
        response.status === 206 &&
        response.data.massage === "minutely request limit"
      ) {
        set_fallback("minutelyfallback");
      }
    };
    fetchData();
  }, []);

  const fixtures_list = (
    <ul className="fixture-position display-flex flex-rows row-gap-1 flex-wrap">
      {fixtures?.map((x) => {
        return (
          <div className="score-box">
            <span>
              {x.teams.home.name} X {x.teams.away.name}
            </span>
            <span>
              {x.goals.home} X {x.goals.away}
            </span>
            <span>
              {new Date(x.fixture.date).toUTCString().replace("GMT", "")}
            </span>
          </div>
        );
      })}
    </ul>
  );

  return (
    <>
      {fixtures_list}
      {fallback && <FallBackFactory type={fallback} />}
    </>
  );
};

export default Fixtures;
