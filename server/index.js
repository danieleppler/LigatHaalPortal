var express = require('express')
const cors = require('cors')
const path = require('path')
const cache = require('./middleware.cacheing')

require('./axios')
require('dotenv').config()

const port = 3000
const app = express()

app.use(express.json())
app.use(cors())

console.log(`Running in ${process.env.NODE_ENV} mode`);

if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.join(__dirname,'../front/dist')))

    app.get('/app',(req,res)=>{
       res.sendFile(path.join(__dirname,'../front/dist/index.html'))
   })
  
}

app.use(cache(720)) //in minutes

const teamsController =  require('./controllers/teamsController')
app.use('/teams',teamsController)

const leaguesController = require('./controllers/leaguesController')
app.use('/leagues',leaguesController)

const playersController = require('./controllers/playersController')
app.use('/players',playersController)

const venueController = require('./controllers/venueController')
app.use('/venues',venueController)

const fixturesController = require('./controllers/FixturesController')
app.use('/fixtures',fixturesController)

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})


