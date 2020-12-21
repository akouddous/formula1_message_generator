
const drivers = ['Lewis Hamilton', 'Valtteri Bottas', 'Carlos Sainz',
'Charles Leclerc', 'Max Verstappen', 'Sergio Perez', 'Daniel Ricciardo', 
'Lando Norris', 'Esteban Ocon', 'Fernando Alonso', ' Yuki Tsunoda',
'Pierre Gasly', 'Sebastian Vettel', 'Lance Stroll', 'Kimi Raikkonen',
'Antonio Giovinazzi', 'Mich Schumacher', 'Nikita Mazepin', 'George Russel',
'Nicholas Latifi'];

const teams = ['Mercedes', 'Mercedes', 'Ferrari', 'Ferrari', 'Red Bull',
'Red Bull', 'McLaren', 'McLaren', 'Alpine', 'Alpine', 'AlphaTauri',
'AlphaTauri', 'Aston Martin', 'Aston Martin', 'Alfa Romeo', 'Alfa Romeo',
'Haas', 'Haas', 'Willimas', 'Williams'];

const tracks = ['Australia (Melbourne)', 'Bahrain (Sakhir)',
'China (Shanghai)', 'Spain (Barcelona)', 'Monaco (Monaco)',
'Azerbaijan (Baku)', 'Canada (Montreal)', 'France (Le Castellet)',
'Austria (Spielberg)', 'United Kingdom (Silverstone)',
'Hungary (Budapest)', 'Belgium (Spa)', 'Netherlands (Zandvoort)',
'Italy (Monza)', 'Russia (Sochi)', 'Singapore (Singapore)',
'Japan (Suzuka)', 'USA (Austin)', 'Mexico (Mexico City)',
'Brazil (Sao Paulo)', 'Saudi Arabia (Jeddah)', 'Abu Dhabi (Abu Dhabi)'];

let driverTeam = [];

function randomPositionArray() {
    let randomPositionArray = [];
    while (randomPositionArray.length < driverTeam.length) {
        let position = Math.ceil(Math.random() * driverTeam.length)
        if (!randomPositionArray.includes(position)) {
            randomPositionArray.push(position)
        }
    }
    return randomPositionArray
};

function driverAndTeamGenerator(driver, team) {
    const driverTeamObj = {
        driver: driver,
        team: team,
        position: 0
    };
    driverTeam.push(driverTeamObj);
    
};

for (let driver in drivers) {
    driverAndTeamGenerator(drivers[driver], teams[driver])
    let positions = randomPositionArray();
    for (let i=0; i<positions.length; i++) {
        driverTeam[i].position = positions[i]
    }
};

driverTeam.sort((a, b) => (a.position > b.position) ? 1 : -1)

function randomTrack() {
    let randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
    return randomTrack
};

// loops through drivers and teams arrays, passing 
// them through factory function driverAndTeamGenerator to create
// driverTeam object and push into driverTeam array

const getGetOrdinal = function(n) {
    const s=["th","st","nd","rd"],
        v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);
 }

function messageOutput() {
    console.log(`Here are my guesses for winners of the ${randomTrack()} Grand Prix:\n`);
    for (let obj of driverTeam) {
        console.log(`${obj.driver} driving for ${obj.team} finished in ${getGetOrdinal(obj.position)} place.\n`)
    }
};


messageOutput()

console.log(driverTeam)




