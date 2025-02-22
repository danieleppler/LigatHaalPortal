import { useState } from "react";
import { MainPagePlaceHolder } from "./MainPagePlaceHolder";
import axios from "axios";
import { TeamViewComp } from "./TeamViewComp";

const server_url = import.meta.env.VITE_SERVER;

const response = await axios.get(`${server_url}/teams`);

let teams = [];

if (response.status === 200) teams = response.data;

function App() {
  const [team_clicked, set_team_clicked] = useState();

  return (
    <>
      <ul className="main-toolbar flexbox-container">
        {teams.map((x) => {
          return (
            <li key={x.team.id}>
              <img
                className="team-logo"
                onClick={() => {
                  set_team_clicked({
                    teamid: x.team.id,
                    venueid: x.venue.id,
                    teamname: x.team.name,
                    team_logo: x.team.logo,
                  });
                }}
                src={x.team.logo}
              />
            </li>
          );
        })}
      </ul>
      <div className="main-bg pos-relative">
        {!team_clicked && <MainPagePlaceHolder />}
        {team_clicked && (
          <TeamViewComp
            teamid={team_clicked.teamid}
            venueid={team_clicked.venueid}
            teamname={team_clicked.teamname}
            team_logo={team_clicked.team_logo}
          />
        )}
      </div>
    </>
  );
}

export default App;
