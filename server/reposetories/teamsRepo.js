const axios = require('../axios')


const getTeamsData = async (league_id,season,apiKey) =>{
    var config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/teams?league=${league_id}&season=${season}`,
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };
    
    const data = axios(config)
    .then(function (response) {
      return response.data.response;
    })
    .catch(function (error) {
      console.log(error);
    });

    return data;
}

const mock_data = async () =>{
  return [
    {
        "team": {
            "id": 563,
            "name": "Hapoel Beer Sheva",
            "code": "HAP",
            "country": "Israel",
            "founded": 1949,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/563.png"
        },
        "venue": {
            "id": 867,
            "name": "Yaakov Turner Toto Stadium",
            "address": "Etsel Street 2",
            "city": "Beer Sheva",
            "capacity": 16126,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/867.png"
        }
    },
    {
        "team": {
            "id": 604,
            "name": "Maccabi Tel Aviv",
            "code": "MAC",
            "country": "Israel",
            "founded": 1906,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/604.png"
        },
        "venue": {
            "id": 10592,
            "name": "Bloomfield Stadium",
            "address": "Ha-Tkuma Street",
            "city": "Tel-Aviv",
            "capacity": 29400,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/10592.png"
        }
    },
    {
        "team": {
            "id": 657,
            "name": "Beitar Jerusalem",
            "code": "BEI",
            "country": "Israel",
            "founded": 1936,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/657.png"
        },
        "venue": {
            "id": 866,
            "name": "Teddi Malcha Stadium",
            "address": "David Ayalon",
            "city": "Jerusalem",
            "capacity": 33500,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/866.png"
        }
    },
    {
        "team": {
            "id": 2253,
            "name": "Hapoel Haifa",
            "code": "HAP",
            "country": "Israel",
            "founded": 1924,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/2253.png"
        },
        "venue": {
            "id": 868,
            "name": "Sammy Ofer Stadium",
            "address": "2 Rothenberg Street",
            "city": "Haifa",
            "capacity": 30820,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/868.png"
        }
    },
    {
        "team": {
            "id": 4195,
            "name": "Maccabi Haifa",
            "code": "MAC",
            "country": "Israel",
            "founded": 1913,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4195.png"
        },
        "venue": {
            "id": 868,
            "name": "Sammy Ofer Stadium",
            "address": "2 Rothenberg Street",
            "city": "Haifa",
            "capacity": 30820,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/868.png"
        }
    },
    {
        "team": {
            "id": 4481,
            "name": "Bnei Sakhnin",
            "code": "BNE",
            "country": "Israel",
            "founded": 1991,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4481.png"
        },
        "venue": {
            "id": 3402,
            "name": "Doha Stadium",
            "address": "1 Sakhnin Boulevard",
            "city": "Sakhnin",
            "capacity": 8500,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/3402.png"
        }
    },
    {
        "team": {
            "id": 4486,
            "name": "Hapoel Katamon",
            "code": "HAP",
            "country": "Israel",
            "founded": 2007,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4486.png"
        },
        "venue": {
            "id": 866,
            "name": "Teddi Malcha Stadium",
            "address": "David Ayalon",
            "city": "Jerusalem",
            "capacity": 33500,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/866.png"
        }
    },
    {
        "team": {
            "id": 4499,
            "name": "Sektzia Nes Tziona",
            "code": "SEK",
            "country": "Israel",
            "founded": 1956,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4499.png"
        },
        "venue": {
            "id": 3408,
            "name": "HaMoshava Stadium",
            "address": "Em Hamoshavot Road 12",
            "city": "Petach-Tikva",
            "capacity": 12500,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/3408.png"
        }
    },
    {
        "team": {
            "id": 4500,
            "name": "Hapoel Hadera",
            "code": null,
            "country": "Israel",
            "founded": null,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4500.png"
        },
        "venue": {
            "id": 11941,
            "name": "Netanya Stadium",
            "address": "HaMehkar Street",
            "city": "Netanya",
            "capacity": 13610,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/11941.png"
        }
    },
    {
        "team": {
            "id": 4501,
            "name": "Hapoel Tel Aviv",
            "code": "HAP",
            "country": "Israel",
            "founded": 1926,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4501.png"
        },
        "venue": {
            "id": 10592,
            "name": "Bloomfield Stadium",
            "address": "Ha-Tkuma Street",
            "city": "Tel-Aviv",
            "capacity": 29400,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/10592.png"
        }
    },
    {
        "team": {
            "id": 4505,
            "name": "Maccabi Netanya",
            "code": "MAC",
            "country": "Israel",
            "founded": 1934,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4505.png"
        },
        "venue": {
            "id": 11941,
            "name": "Netanya Stadium",
            "address": "HaMehkar Street",
            "city": "Netanya",
            "capacity": 13610,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/11941.png"
        }
    },
    {
        "team": {
            "id": 4507,
            "name": "Ashdod",
            "code": "MOA",
            "country": "Israel",
            "founded": 1999,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4507.png"
        },
        "venue": {
            "id": 3419,
            "name": "Yud-Alef Stadium",
            "address": "Ha-Histadrut Street 6",
            "city": "Ashdod",
            "capacity": 7980,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/3419.png"
        }
    },
    {
        "team": {
            "id": 4510,
            "name": "Ironi Kiryat Shmona",
            "code": "SHM",
            "country": "Israel",
            "founded": null,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/4510.png"
        },
        "venue": {
            "id": 3420,
            "name": "Kiryat-Shmona Municipal Stadium",
            "address": null,
            "city": "Kiryat-Shmona",
            "capacity": 5300,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/3420.png"
        }
    },
    {
        "team": {
            "id": 6186,
            "name": "Maccabi Bnei Raina",
            "code": null,
            "country": "Israel",
            "founded": null,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/6186.png"
        },
        "venue": {
            "id": 3407,
            "name": "Green Stadium",
            "address": null,
            "city": "Nazareth Illit",
            "capacity": 5200,
            "surface": "grass",
            "image": "https://media.api-sports.io/football/venues/3407.png"
        }
    }
]
}


module.exports = {getTeamsData,mock_data}