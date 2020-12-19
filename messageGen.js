/*
Codecademy.com instructions: Create random message generator of choice using Javascript.

Randomly generated guesses: Formula 1 Grand Prix end-of-race results by driver, team, and race track.
Data1: Name of driver and team in 1st place
Data2: Name of driver and team in 2nd place
Data3: race track
*/

const drivers = ['Sergio Perez', 'Max Verstappen', 'Lewis Hamilton', 'Valteri Bottas', 'Daniel Ricciardo', 'Lando Norris', 'George Russell', 'Nicholas Latifi'];

const teams = ['Red Bull', 'Red Bull', 'Mercedes', 'Mercedes', 'McLaren', 'McLaren', 'Williams', 'Williams'];

const tracks = ['Monza', 'Silverstone', 'Bahrain']

let driverTeam = []

function driverAndTeamGenerator(driver, team) {
    const driverTeamObj = {
        driver: driver,
        team: team,
        position: 0
    }
    driverTeam.push(driverTeamObj)
};

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

function randomTrack() {
    let randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
    return randomTrack
};



// loops through drivers and teams arrays, passing them through factory function driverAndTeamGenerator to create driverTeam object and push into driverTeam array
for (let driver in drivers) {
    driverAndTeamGenerator(drivers[driver], teams[driver])
    let positions = randomPositionArray();
    for (let i=0; i<positions.length; i++) {
        driverTeam[i].position = positions[i]
    }
};

function messageOutput() {
    console.log(`Here are my guesses for winners of the ${randomTrack()} Grand Prix:\n`);
    for (let obj of driverTeam) {
        console.log(`${obj.driver} driving for ${obj.team} finished in position number: ${obj.position}.\n`)
    }
};

messageOutput()




