var express = require('express')
const cors = require('cors')

require('./axios')
require('dotenv').config()

const port = 3000
const app = express()

app.use(express.json())
app.use(cors())

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


