const { default: axios } = require("axios")


const getPlayersByTeamId = async (teamid,api_key) =>{

    const headers = {
        "x-rapidapi-host":"v3.football.api-sports.io",
        "x-rapidapi-key" :api_key
    }

    const endpoint = `https://v3.football.api-sports.io/players/squads?team=${teamid}`
    return await axios.get(endpoint,{headers})
}

const mock_data = async () =>{
    return {
        data:{
            response :[
                {
                    "id": 360150,
                    "name": "O. Melika",
                    "age": 19,
                    "number": 22,
                    "position": "Goalkeeper",
                    "photo": "https://media.api-sports.io/football/players/360150.png"
                },
                {
                    "id": 2759,
                    "name": "S. Sluga",
                    "age": 31,
                    "number": 23,
                    "position": "Goalkeeper",
                    "photo": "https://media.api-sports.io/football/players/2759.png"
                },
                {
                    "id": 412770,
                    "name": "R. Amedi",
                    "age": 20,
                    "number": 50,
                    "position": "Goalkeeper",
                    "photo": "https://media.api-sports.io/football/players/412770.png"
                },
                {
                    "id": 111003,
                    "name": "R. Mishpati",
                    "age": 32,
                    "number": 90,
                    "position": "Goalkeeper",
                    "photo": "https://media.api-sports.io/football/players/111003.png"
                },
                {
                    "id": 106811,
                    "name": "A. Cohen",
                    "age": 29,
                    "number": 2,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/106811.png"
                },
                {
                    "id": 315127,
                    "name": "R. Revivo",
                    "age": 21,
                    "number": 3,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/315127.png"
                },
                {
                    "id": 292553,
                    "name": "S. Lemkin",
                    "age": 21,
                    "number": 4,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/292553.png"
                },
                {
                    "id": 111288,
                    "name": "I. Nachmias",
                    "age": 27,
                    "number": 5,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/111288.png"
                },
                {
                    "id": 274199,
                    "name": "T. Asante",
                    "age": 22,
                    "number": 6,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/274199.png"
                },
                {
                    "id": 111016,
                    "name": "R. Shlomo",
                    "age": 25,
                    "number": 13,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/111016.png"
                },
                {
                    "id": 133403,
                    "name": "N. Stojić",
                    "age": 26,
                    "number": 18,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/133403.png"
                },
                {
                    "id": 79153,
                    "name": "O. Davidzada",
                    "age": 33,
                    "number": 27,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/79153.png"
                },
                {
                    "id": 111284,
                    "name": "S. Yehezkel",
                    "age": 29,
                    "number": 29,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/111284.png"
                },
                {
                    "id": 493653,
                    "name": "Idan Weinberg",
                    "age": 17,
                    "number": 38,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/493653.png"
                },
                {
                    "id": 1122,
                    "name": "N. Bitton",
                    "age": 33,
                    "number": 55,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/1122.png"
                },
                {
                    "id": 412724,
                    "name": "D. Tischler",
                    "age": 18,
                    "number": null,
                    "position": "Defender",
                    "photo": "https://media.api-sports.io/football/players/412724.png"
                },
                {
                    "id": 37183,
                    "name": "J. van Overeem",
                    "age": 30,
                    "number": 14,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/37183.png"
                },
                {
                    "id": 111148,
                    "name": "G. Kanichowsky",
                    "age": 27,
                    "number": 16,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/111148.png"
                },
                {
                    "id": 342928,
                    "name": "H. Addo",
                    "age": 21,
                    "number": 20,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/342928.png"
                },
                {
                    "id": 206361,
                    "name": "I. Sissokho",
                    "age": 22,
                    "number": 28,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/206361.png"
                },
                {
                    "id": 137531,
                    "name": "I. Shahar",
                    "age": 23,
                    "number": 36,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/137531.png"
                },
                {
                    "id": 56011,
                    "name": "Dor Peretz",
                    "age": 29,
                    "number": 42,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/56011.png"
                },
                {
                    "id": 126969,
                    "name": "O. Davida",
                    "age": 23,
                    "number": 77,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/126969.png"
                },
                {
                    "id": 453684,
                    "name": "R. Magor",
                    "age": 17,
                    "number": null,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/453684.png"
                },
                {
                    "id": 395783,
                    "name": "I. Oli",
                    "age": 18,
                    "number": null,
                    "position": "Midfielder",
                    "photo": "https://media.api-sports.io/football/players/395783.png"
                },
                {
                    "id": 12943,
                    "name": "E. Zahavi",
                    "age": 37,
                    "number": 7,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/12943.png"
                },
                {
                    "id": 269532,
                    "name": "D. Turgeman",
                    "age": 21,
                    "number": 9,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/269532.png"
                },
                {
                    "id": 111319,
                    "name": "Y. Malede",
                    "age": 25,
                    "number": 15,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/111319.png"
                },
                {
                    "id": 335633,
                    "name": "Weslley Patati",
                    "age": 21,
                    "number": 17,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/335633.png"
                },
                {
                    "id": 400496,
                    "name": "E. Madmon",
                    "age": 20,
                    "number": 19,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/400496.png"
                },
                {
                    "id": 126701,
                    "name": "H. Layous",
                    "age": 24,
                    "number": 33,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/126701.png"
                },
                {
                    "id": 395776,
                    "name": "Y. Blai",
                    "age": 18,
                    "number": null,
                    "position": "Attacker",
                    "photo": "https://media.api-sports.io/football/players/395776.png"
                }
            ]
    
        }
          }
}

module.exports = {getPlayersByTeamId,mock_data}