const { default: axios } = require("axios")

const getFixturesByTeamId = async (team_id,api_key,season) =>{

    const headers = {
        "x-rapidapi-host":"v3.football.api-sports.io",
        "x-rapidapi-key" :api_key
    }

    const endpoint =  `https://v3.football.api-sports.io/fixtures?team=${team_id}&season=${season}`
    return axios.get(endpoint,{headers})
}

const mock_data = () =>{
    return {
        data:{
            response :[
                {
                    "fixture": {
                        "id": 865840,
                        "referee": "A. Shiloach",
                        "timezone": "UTC",
                        "date": "2022-08-20T16:00:00+00:00",
                        "timestamp": 1661011200,
                        "periods": {
                            "first": 1661011200,
                            "second": 1661014800
                        },
                        "venue": {
                            "id": 3408,
                            "name": "HaMoshava Stadium",
                            "city": "Petach-Tikva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 1"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4500,
                            "name": "Hapoel Hadera",
                            "logo": "https://media.api-sports.io/football/teams/4500.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865844,
                        "referee": "O. Na'al",
                        "timezone": "UTC",
                        "date": "2022-08-27T15:00:00+00:00",
                        "timestamp": 1661612400,
                        "periods": {
                            "first": 1661612400,
                            "second": 1661616000
                        },
                        "venue": {
                            "id": 3420,
                            "name": "Kiryat-Shmona Municipal Stadium",
                            "city": "Kiryat-Shmona"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 2"
                    },
                    "teams": {
                        "home": {
                            "id": 4510,
                            "name": "Ironi Kiryat Shmona",
                            "logo": "https://media.api-sports.io/football/teams/4510.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865853,
                        "referee": "N. Steif",
                        "timezone": "UTC",
                        "date": "2022-09-03T16:00:00+00:00",
                        "timestamp": 1662220800,
                        "periods": {
                            "first": 1662220800,
                            "second": 1662224400
                        },
                        "venue": {
                            "id": 3408,
                            "name": "HaMoshava Stadium",
                            "city": "Petach-Tikva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 3"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4507,
                            "name": "Ashdod",
                            "logo": "https://media.api-sports.io/football/teams/4507.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 3,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 3,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865859,
                        "referee": "E. Shmuelevich",
                        "timezone": "UTC",
                        "date": "2022-09-12T17:30:00+00:00",
                        "timestamp": 1663003800,
                        "periods": {
                            "first": 1663003800,
                            "second": 1663007400
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 4"
                    },
                    "teams": {
                        "home": {
                            "id": 657,
                            "name": "Beitar Jerusalem",
                            "logo": "https://media.api-sports.io/football/teams/657.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865866,
                        "referee": "A. Shiloach",
                        "timezone": "UTC",
                        "date": "2022-09-18T17:15:00+00:00",
                        "timestamp": 1663521300,
                        "periods": {
                            "first": 1663521300,
                            "second": 1663524900
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 5"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4195,
                            "name": "Maccabi Haifa",
                            "logo": "https://media.api-sports.io/football/teams/4195.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 3,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 2,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 3,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865874,
                        "referee": "N. Steif",
                        "timezone": "UTC",
                        "date": "2022-10-02T17:15:00+00:00",
                        "timestamp": 1664730900,
                        "periods": {
                            "first": 1664730900,
                            "second": 1664734500
                        },
                        "venue": {
                            "id": 10592,
                            "name": "Bloomfield Stadium",
                            "city": "Tel-Aviv"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 6"
                    },
                    "teams": {
                        "home": {
                            "id": 4501,
                            "name": "Hapoel Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/4501.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 3
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 2
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 3
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865879,
                        "referee": "S. Levi",
                        "timezone": "UTC",
                        "date": "2022-10-08T16:00:00+00:00",
                        "timestamp": 1665244800,
                        "periods": {
                            "first": 1665244800,
                            "second": 1665248400
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 7"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4481,
                            "name": "Bnei Sakhnin",
                            "logo": "https://media.api-sports.io/football/teams/4481.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865889,
                        "referee": "O. Asulin",
                        "timezone": "UTC",
                        "date": "2022-10-17T16:30:00+00:00",
                        "timestamp": 1666024200,
                        "periods": {
                            "first": 1666024200,
                            "second": 1666027800
                        },
                        "venue": {
                            "id": 11941,
                            "name": "Netanya Stadium",
                            "city": "Netanya"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 8"
                    },
                    "teams": {
                        "home": {
                            "id": 4505,
                            "name": "Maccabi Netanya",
                            "logo": "https://media.api-sports.io/football/teams/4505.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865892,
                        "referee": "O. Grinfeeld",
                        "timezone": "UTC",
                        "date": "2022-10-22T14:30:00+00:00",
                        "timestamp": 1666449000,
                        "periods": {
                            "first": 1666449000,
                            "second": 1666452600
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 9"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 563,
                            "name": "Hapoel Beer Sheva",
                            "logo": "https://media.api-sports.io/football/teams/563.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 4
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 3
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 4
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865904,
                        "referee": "M. Rushrush",
                        "timezone": "UTC",
                        "date": "2022-10-29T15:45:00+00:00",
                        "timestamp": 1667058300,
                        "periods": {
                            "first": 1667058300,
                            "second": 1667061900
                        },
                        "venue": {
                            "id": 3408,
                            "name": "HaMoshava Stadium",
                            "city": "Petach-Tikva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 10"
                    },
                    "teams": {
                        "home": {
                            "id": 4499,
                            "name": "Sektzia Nes Tziona",
                            "logo": "https://media.api-sports.io/football/teams/4499.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865905,
                        "referee": "R. Reinshreiber",
                        "timezone": "UTC",
                        "date": "2022-11-05T16:00:00+00:00",
                        "timestamp": 1667664000,
                        "periods": {
                            "first": 1667664000,
                            "second": 1667667600
                        },
                        "venue": {
                            "id": 868,
                            "name": "Sammy Ofer Stadium",
                            "city": "Haifa"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 11"
                    },
                    "teams": {
                        "home": {
                            "id": 2253,
                            "name": "Hapoel Haifa",
                            "logo": "https://media.api-sports.io/football/teams/2253.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865918,
                        "referee": "E. Papir",
                        "timezone": "UTC",
                        "date": "2022-11-08T18:15:00+00:00",
                        "timestamp": 1667931300,
                        "periods": {
                            "first": 1667931300,
                            "second": 1667934900
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 12"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 604,
                            "name": "Maccabi Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/604.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 3
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 3
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865920,
                        "referee": "D. Fuxman",
                        "timezone": "UTC",
                        "date": "2022-11-13T17:00:00+00:00",
                        "timestamp": 1668358800,
                        "periods": {
                            "first": 1668358800,
                            "second": 1668362400
                        },
                        "venue": {
                            "id": 3407,
                            "name": "Green Stadium",
                            "city": "Nazareth Illit"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 13"
                    },
                    "teams": {
                        "home": {
                            "id": 6186,
                            "name": "Maccabi Bnei Raina",
                            "logo": "https://media.api-sports.io/football/teams/6186.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865931,
                        "referee": "S. Levi",
                        "timezone": "UTC",
                        "date": "2022-12-17T13:00:00+00:00",
                        "timestamp": 1671282000,
                        "periods": {
                            "first": 1671282000,
                            "second": 1671285600
                        },
                        "venue": {
                            "id": 11941,
                            "name": "Netanya Stadium",
                            "city": "Netanya"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 14"
                    },
                    "teams": {
                        "home": {
                            "id": 4500,
                            "name": "Hapoel Hadera",
                            "logo": "https://media.api-sports.io/football/teams/4500.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865935,
                        "referee": "N. Steif",
                        "timezone": "UTC",
                        "date": "2022-12-24T15:30:00+00:00",
                        "timestamp": 1671895800,
                        "periods": {
                            "first": 1671895800,
                            "second": 1671899400
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 15"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4510,
                            "name": "Ironi Kiryat Shmona",
                            "logo": "https://media.api-sports.io/football/teams/4510.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865944,
                        "referee": "Y. Mizrahi",
                        "timezone": "UTC",
                        "date": "2022-12-31T17:10:00+00:00",
                        "timestamp": 1672506600,
                        "periods": {
                            "first": 1672506600,
                            "second": 1672510200
                        },
                        "venue": {
                            "id": 3419,
                            "name": "Yud-Alef Stadium",
                            "city": "Ashdod"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 16"
                    },
                    "teams": {
                        "home": {
                            "id": 4507,
                            "name": "Ashdod",
                            "logo": "https://media.api-sports.io/football/teams/4507.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865950,
                        "referee": "O. Grinfeeld",
                        "timezone": "UTC",
                        "date": "2023-01-07T17:30:00+00:00",
                        "timestamp": 1673112600,
                        "periods": {
                            "first": 1673112600,
                            "second": 1673116200
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 17"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        },
                        "away": {
                            "id": 657,
                            "name": "Beitar Jerusalem",
                            "logo": "https://media.api-sports.io/football/teams/657.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865957,
                        "referee": "S. Ben Avraham",
                        "timezone": "UTC",
                        "date": "2023-01-15T18:15:00+00:00",
                        "timestamp": 1673806500,
                        "periods": {
                            "first": 1673806500,
                            "second": 1673810100
                        },
                        "venue": {
                            "id": 868,
                            "name": "Sammy Ofer Stadium",
                            "city": "Haifa"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 18"
                    },
                    "teams": {
                        "home": {
                            "id": 4195,
                            "name": "Maccabi Haifa",
                            "logo": "https://media.api-sports.io/football/teams/4195.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 2,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865965,
                        "referee": "A. Shiloach",
                        "timezone": "UTC",
                        "date": "2023-01-21T13:00:00+00:00",
                        "timestamp": 1674306000,
                        "periods": {
                            "first": 1674306000,
                            "second": 1674309600
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 19"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4501,
                            "name": "Hapoel Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/4501.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865970,
                        "referee": "G. Levi",
                        "timezone": "UTC",
                        "date": "2023-01-30T18:00:00+00:00",
                        "timestamp": 1675101600,
                        "periods": {
                            "first": 1675101600,
                            "second": 1675105200
                        },
                        "venue": {
                            "id": 3402,
                            "name": "Doha Stadium",
                            "city": "Sakhnin"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 20"
                    },
                    "teams": {
                        "home": {
                            "id": 4481,
                            "name": "Bnei Sakhnin",
                            "logo": "https://media.api-sports.io/football/teams/4481.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865980,
                        "referee": "R. Reinshreiber",
                        "timezone": "UTC",
                        "date": "2023-02-04T16:00:00+00:00",
                        "timestamp": 1675526400,
                        "periods": {
                            "first": 1675526400,
                            "second": 1675530000
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 21"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4505,
                            "name": "Maccabi Netanya",
                            "logo": "https://media.api-sports.io/football/teams/4505.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865983,
                        "referee": "O. Grinfeeld",
                        "timezone": "UTC",
                        "date": "2023-02-11T15:30:00+00:00",
                        "timestamp": 1676129400,
                        "periods": {
                            "first": 1676129400,
                            "second": 1676133000
                        },
                        "venue": {
                            "id": 867,
                            "name": "Yaakov Turner Toto Stadium",
                            "city": "Beer Sheva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 22"
                    },
                    "teams": {
                        "home": {
                            "id": 563,
                            "name": "Hapoel Beer Sheva",
                            "logo": "https://media.api-sports.io/football/teams/563.png",
                            "winner": null
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865995,
                        "referee": "O. Asulin",
                        "timezone": "UTC",
                        "date": "2023-02-18T16:30:00+00:00",
                        "timestamp": 1676737800,
                        "periods": {
                            "first": 1676737800,
                            "second": 1676741400
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 23"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4499,
                            "name": "Sektzia Nes Tziona",
                            "logo": "https://media.api-sports.io/football/teams/4499.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 865996,
                        "referee": "I. Frid",
                        "timezone": "UTC",
                        "date": "2023-02-26T18:15:00+00:00",
                        "timestamp": 1677435300,
                        "periods": {
                            "first": 1677435300,
                            "second": 1677438900
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 24"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": null
                        },
                        "away": {
                            "id": 2253,
                            "name": "Hapoel Haifa",
                            "logo": "https://media.api-sports.io/football/teams/2253.png",
                            "winner": null
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 866009,
                        "referee": "I. Layba",
                        "timezone": "UTC",
                        "date": "2023-03-04T17:30:00+00:00",
                        "timestamp": 1677951000,
                        "periods": {
                            "first": 1677951000,
                            "second": 1677954600
                        },
                        "venue": {
                            "id": 10592,
                            "name": "Bloomfield Stadium",
                            "city": "Tel-Aviv"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 25"
                    },
                    "teams": {
                        "home": {
                            "id": 604,
                            "name": "Maccabi Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/604.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 866011,
                        "referee": "O. Asulin",
                        "timezone": "UTC",
                        "date": "2023-03-11T15:30:00+00:00",
                        "timestamp": 1678548600,
                        "periods": {
                            "first": 1678548600,
                            "second": 1678552200
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Regular Season - 26"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 6186,
                            "name": "Maccabi Bnei Raina",
                            "logo": "https://media.api-sports.io/football/teams/6186.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 866196,
                        "referee": "D. Fuxman",
                        "timezone": "UTC",
                        "date": "2022-07-30T17:00:00+00:00",
                        "timestamp": 1659200400,
                        "periods": {
                            "first": 1659200400,
                            "second": 1659204000
                        },
                        "venue": {
                            "id": 3408,
                            "name": "HaMoshava Stadium",
                            "city": "Petach-Tikva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 385,
                        "name": "Toto Cup Ligat Al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/385.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Group Stage - 1"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4501,
                            "name": "Hapoel Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/4501.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 3
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 2
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 3
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 866199,
                        "referee": "S. Ben Avraham",
                        "timezone": "UTC",
                        "date": "2022-09-22T17:00:00+00:00",
                        "timestamp": 1663866000,
                        "periods": {
                            "first": 1663866000,
                            "second": 1663869600
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 385,
                        "name": "Toto Cup Ligat Al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/385.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Group Stage - 2"
                    },
                    "teams": {
                        "home": {
                            "id": 657,
                            "name": "Beitar Jerusalem",
                            "logo": "https://media.api-sports.io/football/teams/657.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 866207,
                        "referee": "S. Ben Avraham",
                        "timezone": "UTC",
                        "date": "2022-08-13T17:30:00+00:00",
                        "timestamp": 1660411800,
                        "periods": {
                            "first": 1660411800,
                            "second": 1660415400
                        },
                        "venue": {
                            "id": 3408,
                            "name": "HaMoshava Stadium",
                            "city": "Petach-Tikva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 385,
                        "name": "Toto Cup Ligat Al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/385.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Group Stage - 4"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4499,
                            "name": "Sektzia Nes Tziona",
                            "logo": "https://media.api-sports.io/football/teams/4499.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 866212,
                        "referee": "E. Papir",
                        "timezone": "UTC",
                        "date": "2022-08-16T17:30:00+00:00",
                        "timestamp": 1660671000,
                        "periods": {
                            "first": 1660671000,
                            "second": 1660674600
                        },
                        "venue": {
                            "id": 3419,
                            "name": "Yud-Alef Stadium",
                            "city": "Ashdod"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 385,
                        "name": "Toto Cup Ligat Al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/385.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Group Stage - 5"
                    },
                    "teams": {
                        "home": {
                            "id": 4507,
                            "name": "Ashdod",
                            "logo": "https://media.api-sports.io/football/teams/4507.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 922448,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2022-07-24T09:30:00+00:00",
                        "timestamp": 1658655000,
                        "periods": {
                            "first": 1658655000,
                            "second": 1658658600
                        },
                        "venue": {
                            "id": null,
                            "name": "Baza treningowa KS Cracovia",
                            "city": "Rączna"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 667,
                        "name": "Friendlies Clubs",
                        "country": "World",
                        "logo": "https://media.api-sports.io/football/leagues/667.png",
                        "flag": null,
                        "season": 2022,
                        "round": "Club Friendlies 3"
                    },
                    "teams": {
                        "home": {
                            "id": 350,
                            "name": "Cracovia Krakow",
                            "logo": "https://media.api-sports.io/football/teams/350.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 3,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": null,
                            "away": null
                        },
                        "fulltime": {
                            "home": 3,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 922463,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2022-07-26T10:00:00+00:00",
                        "timestamp": 1658829600,
                        "periods": {
                            "first": 1658829600,
                            "second": 1658833200
                        },
                        "venue": {
                            "id": null,
                            "name": "Stadion Sportowy Nowiny Koło Kielc",
                            "city": "Nowiny"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 667,
                        "name": "Friendlies Clubs",
                        "country": "World",
                        "logo": "https://media.api-sports.io/football/leagues/667.png",
                        "flag": null,
                        "season": 2022,
                        "round": "Club Friendlies 3"
                    },
                    "teams": {
                        "home": {
                            "id": 3402,
                            "name": "Omonia Nicosia",
                            "logo": "https://media.api-sports.io/football/teams/3402.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 922861,
                        "referee": null,
                        "timezone": "UTC",
                        "date": "2022-07-21T09:00:00+00:00",
                        "timestamp": 1658394000,
                        "periods": {
                            "first": 1658394000,
                            "second": 1658397600
                        },
                        "venue": {
                            "id": null,
                            "name": null,
                            "city": null
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 667,
                        "name": "Friendlies Clubs",
                        "country": "World",
                        "logo": "https://media.api-sports.io/football/leagues/667.png",
                        "flag": null,
                        "season": 2022,
                        "round": "Club Friendlies 5"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        },
                        "away": {
                            "id": 3486,
                            "name": "Jastrzębie",
                            "logo": "https://media.api-sports.io/football/teams/3486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 3,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 2,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 3,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 974140,
                        "referee": "E. Shmuelevich",
                        "timezone": "UTC",
                        "date": "2022-12-12T17:30:00+00:00",
                        "timestamp": 1670866200,
                        "periods": {
                            "first": 1670866200,
                            "second": 1670869800
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 384,
                        "name": "State Cup",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/384.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "8th Round"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4495,
                            "name": "Maccabi Petah Tikva",
                            "logo": "https://media.api-sports.io/football/teams/4495.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 974209,
                        "referee": "Y. Mizrahi",
                        "timezone": "UTC",
                        "date": "2022-12-07T18:00:00+00:00",
                        "timestamp": 1670436000,
                        "periods": {
                            "first": 1670436000,
                            "second": 1670439600
                        },
                        "venue": {
                            "id": 10592,
                            "name": "Bloomfield Stadium",
                            "city": "Tel-Aviv"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 385,
                        "name": "Toto Cup Ligat Al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/385.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "7th Place Final"
                    },
                    "teams": {
                        "home": {
                            "id": 604,
                            "name": "Maccabi Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/604.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014703,
                        "referee": "N. Odeh",
                        "timezone": "UTC",
                        "date": "2023-03-18T13:00:00+00:00",
                        "timestamp": 1679144400,
                        "periods": {
                            "first": 1679144400,
                            "second": 1679148000
                        },
                        "venue": {
                            "id": 867,
                            "name": "Yaakov Turner Toto Stadium",
                            "city": "Beer Sheva"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 1"
                    },
                    "teams": {
                        "home": {
                            "id": 563,
                            "name": "Hapoel Beer Sheva",
                            "logo": "https://media.api-sports.io/football/teams/563.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014706,
                        "referee": "D. Fuxman",
                        "timezone": "UTC",
                        "date": "2023-04-01T15:30:00+00:00",
                        "timestamp": 1680363000,
                        "periods": {
                            "first": 1680363000,
                            "second": 1680366600
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 2"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 604,
                            "name": "Maccabi Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/604.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014710,
                        "referee": "N. Steif",
                        "timezone": "UTC",
                        "date": "2023-04-04T16:45:00+00:00",
                        "timestamp": 1680626700,
                        "periods": {
                            "first": 1680626700,
                            "second": 1680630300
                        },
                        "venue": {
                            "id": 11941,
                            "name": "Netanya Stadium",
                            "city": "Netanya"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 3"
                    },
                    "teams": {
                        "home": {
                            "id": 4505,
                            "name": "Maccabi Netanya",
                            "logo": "https://media.api-sports.io/football/teams/4505.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014711,
                        "referee": "D. Tzino",
                        "timezone": "UTC",
                        "date": "2023-04-08T14:30:00+00:00",
                        "timestamp": 1680964200,
                        "periods": {
                            "first": 1680964200,
                            "second": 1680967800
                        },
                        "venue": {
                            "id": 3419,
                            "name": "Yud-Alef Stadium",
                            "city": "Ashdod"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 4"
                    },
                    "teams": {
                        "home": {
                            "id": 4507,
                            "name": "Ashdod",
                            "logo": "https://media.api-sports.io/football/teams/4507.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014716,
                        "referee": "I. Layba",
                        "timezone": "UTC",
                        "date": "2023-04-15T15:30:00+00:00",
                        "timestamp": 1681572600,
                        "periods": {
                            "first": 1681572600,
                            "second": 1681576200
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 5"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4195,
                            "name": "Maccabi Haifa",
                            "logo": "https://media.api-sports.io/football/teams/4195.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014718,
                        "referee": "S. Ben Avraham",
                        "timezone": "UTC",
                        "date": "2023-04-22T15:30:00+00:00",
                        "timestamp": 1682177400,
                        "periods": {
                            "first": 1682177400,
                            "second": 1682181000
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 6"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 563,
                            "name": "Hapoel Beer Sheva",
                            "logo": "https://media.api-sports.io/football/teams/563.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 2
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 2
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014721,
                        "referee": "O. Asulin",
                        "timezone": "UTC",
                        "date": "2023-04-29T17:00:00+00:00",
                        "timestamp": 1682787600,
                        "periods": {
                            "first": 1682787600,
                            "second": 1682791200
                        },
                        "venue": {
                            "id": 10592,
                            "name": "Bloomfield Stadium",
                            "city": "Tel-Aviv"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 7"
                    },
                    "teams": {
                        "home": {
                            "id": 604,
                            "name": "Maccabi Tel Aviv",
                            "logo": "https://media.api-sports.io/football/teams/604.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 2,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 2,
                            "away": 1
                        },
                        "fulltime": {
                            "home": 2,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014725,
                        "referee": "G. Laibuvitz",
                        "timezone": "UTC",
                        "date": "2023-05-07T17:15:00+00:00",
                        "timestamp": 1683479700,
                        "periods": {
                            "first": 1683479700,
                            "second": 1683483300
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 8"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4505,
                            "name": "Maccabi Netanya",
                            "logo": "https://media.api-sports.io/football/teams/4505.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 1,
                        "away": 4
                    },
                    "score": {
                        "halftime": {
                            "home": 1,
                            "away": 2
                        },
                        "fulltime": {
                            "home": 1,
                            "away": 4
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014726,
                        "referee": "M. Rushrush",
                        "timezone": "UTC",
                        "date": "2023-05-14T17:15:00+00:00",
                        "timestamp": 1684084500,
                        "periods": {
                            "first": 1684084500,
                            "second": 1684088100
                        },
                        "venue": {
                            "id": 866,
                            "name": "Teddi Malcha Stadium",
                            "city": "Jerusalem"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 9"
                    },
                    "teams": {
                        "home": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        },
                        "away": {
                            "id": 4507,
                            "name": "Ashdod",
                            "logo": "https://media.api-sports.io/football/teams/4507.png",
                            "winner": true
                        }
                    },
                    "goals": {
                        "home": 0,
                        "away": 1
                    },
                    "score": {
                        "halftime": {
                            "home": 0,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 0,
                            "away": 1
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                },
                {
                    "fixture": {
                        "id": 1014731,
                        "referee": "E. Shmuelevich",
                        "timezone": "UTC",
                        "date": "2023-05-20T17:30:00+00:00",
                        "timestamp": 1684603800,
                        "periods": {
                            "first": 1684603800,
                            "second": 1684607400
                        },
                        "venue": {
                            "id": 868,
                            "name": "Sammy Ofer Stadium",
                            "city": "Haifa"
                        },
                        "status": {
                            "long": "Match Finished",
                            "short": "FT",
                            "elapsed": 90,
                            "extra": null
                        }
                    },
                    "league": {
                        "id": 383,
                        "name": "Ligat Ha'al",
                        "country": "Israel",
                        "logo": "https://media.api-sports.io/football/leagues/383.png",
                        "flag": "https://media.api-sports.io/flags/il.svg",
                        "season": 2022,
                        "round": "Championship Round - 10"
                    },
                    "teams": {
                        "home": {
                            "id": 4195,
                            "name": "Maccabi Haifa",
                            "logo": "https://media.api-sports.io/football/teams/4195.png",
                            "winner": true
                        },
                        "away": {
                            "id": 4486,
                            "name": "Hapoel Katamon",
                            "logo": "https://media.api-sports.io/football/teams/4486.png",
                            "winner": false
                        }
                    },
                    "goals": {
                        "home": 5,
                        "away": 0
                    },
                    "score": {
                        "halftime": {
                            "home": 3,
                            "away": 0
                        },
                        "fulltime": {
                            "home": 5,
                            "away": 0
                        },
                        "extratime": {
                            "home": null,
                            "away": null
                        },
                        "penalty": {
                            "home": null,
                            "away": null
                        }
                    }
                }
            ]
        }
        
    }
}

module.exports = {getFixturesByTeamId,mock_data}