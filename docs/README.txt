אתגרים בפרויקט :
1.האם להביא את כל המידע של הקבוצות כבר בעמוד הראשון (הכל כולל הכל ) ולשמור ברידאקס או להביא רק מה שצריך בשביל התצוגה של העמוד הראשון
(לוגו ומספר מזהה) 
ולאחר מכן בכל עמוד של הקבוצה להביא את מה שצריך
הוחלט ללכת על מספר קריאות לשרת כדי לשמור על קוד יותר נקי ומובן, וצמצום העבודה במידה שהמשתמש רק נכנס לדף הראשון ואז יוצא

2.שימוש בcach 
דוגמת axios interceptor 
או בספריית ניהול state
לדוג' redux 

נבחר cache לצמצום קריאות API

3.שמירת תמונות בתיקייה בפרויקט או הקמת DB 
נבחר הקמת DB
כדי לא לפוצץ את הזיכרון של הclient


1.Website Features :

* Main page - showing only the teams logo. every logo is clickable. in the side option to sign in
* Team page - After clicking on a team in the main page the team page will show team photo, quick description, and toolbar
* The toolbar consists of  - Team(Players),Venue,Fixtures,Fans pages
* Team Page - user can filter between position and search for a player. the players shown in a list
* Venue - static page showing venue data
* Fixtures - games list where user can click on fixture to get email notifcation to get tickets information
* Fans -static page showin fans data
* Interactive User Login form
* Interactive User Register form
* Interactive Private data form(update) 

2. Data Flow : 

* Main page  - get team data from https://media.api-sports.io/football/teams/ and pass teamid,venueid to team page
* Team page recives team id from main page,gets data from server,and pass teamid to player page,venueid to venue.
* Players page recives team id and get players data from  https://media.api-sports.io/football/players/
* Venue page get venueid 
* Fixtures page get team id and get data from  https://media.api-sports.io/football/Fixtures/
* Fans page get team id and gets data from server
* Reigster/Login get and set data from server and provide usertoken as a context

3.States :
Player page will hold a state and will hold playerlist component , search component , and filter component
App page holds state to check if there is a team clicked




