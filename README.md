# LigatHaalPortal - https://ligathaalportal.onrender.com/
**A website that presents Israeli ligat haal data - teams, players, fixtures, and venues. Built with react and express .**

Project architecture :

**Front:** 


Built with react (18.3.1) and vite (5.4.11) build tool. the front consists of these pages : 

App - Main page, gets team's data from the server using top-level async call, and presents teams logos in an upper toolbar.  every team logo is clickable and will navigate to teamViewComp


TeamViewComp - Gets team id, venue id and team name props from parent teamViewComp . the page displays an inner toolbar with squad, venue, and fixtures options. Every click on the option renders the corresponding page. 

Squad - Gets team ID prop from TeamViewComp parent. The component gets players' data from the server with useEffect hook every time prop team id changes. Every team player's name, photo, and shirt number is presented on the page. There is an option to filterthe view by player position.

Fixtures - Gets team ID prop from parent TeamViewComp.The component gets fixture data from the server with useEffect hook only at the render of the component . Every fixture teams, score and date is presented on the page.

Venue -  Gets venue ID prop from parent TeamViewComp.The component gets venue data from the server with useEffect hook only at the render of the component . Venue name, address,and seat capacity is presented on the page. 

**Back :**

Built with express (4.21.0). There are 5 available endpoint routes the server offers - teams, leagues, players , venues, fixtures.

The express server acts as a connector between the frontend and the data that been invoke from 'https://v3.football.api-sports.io' api (free plan)

teams - there is a service that gets all team's data from `https://v3.football.api-sports.io/teams'

leagues - there is a service that gets league data from 'https://v3.football.api-sports.io/leagues'

_both this endpoint gets league and teams data of a league that its ID configured in a .env file_

players -  there is a service that gets all player's data of a given team ID from `https://v3.football.api-sports.io/players/squads'

venues -  there is a service that gets all venue data of a given venue ID from `https://v3.football.api-sports.io/venues'

fixtures -  there is a service that gets all fixtures data of a given team ID from `https://v3.football.api-sports.io/fixtures?'

the API key for https://v3.football.api-sports.io is saved on .env file

Due for https://v3.football.api-sports.io api use limitaions , the data retrived from this api is cached on the server for 1 hour each entry , using  memory-cache module

**Deployment :**

the express server serves both the application data with the configured routes and the built react vite index.html + index.css files to the browser (using fallback route)
The app is deployed on render.com service and the link is https://ligathaalportal.onrender.com/
