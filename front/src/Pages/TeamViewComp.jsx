import React, { useEffect, useState } from "react";
import ToolBar from "../ui/ToolBar";

import Squad from "./Squad";
import Venue from "./Venue";
import Fixtures from "./Fixtures";

export const TeamViewComp = ({ teamid, venueid, teamname, team_logo }) => {
  const [view, set_view] = useState("");

  useEffect(() => {
    set_view("");
  }, [teamid]);

  return (
    <div className="flex-align-items-center display-flex flex-cols pos-relative">
      {console.log(team_logo)}
      <img src={team_logo}></img>
      <span id="team-title">{teamname}</span>
      <ToolBar set_view={set_view} />
      <div>
        {view === "Squad" && <Squad teamid={teamid} />}
        {view === "Venue" && <Venue venueid={venueid} />}
        {view === "Fixtures" && <Fixtures team_id={teamid} />}
      </div>
    </div>
  );
};

export default TeamViewComp;
