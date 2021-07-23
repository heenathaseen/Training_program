// a) Create a function to build an object which represents a cricket player.The object should have properties
// for -name, specialization, matches played, total number of runs scored, total wickets taken, 
// individual runs scored in last ten matches, individual wickets taken in last ten matches.

function getSingleObject() {
    return {
        name: "Dhoni",
        specialization: "WicketKeeper-Batsman",
        matchesPlayed: 300,
        totalRunsScored: 10050,
        totalWicketsTaken: 68,
        runsLastTenMatches: getRunArray(),
        wicketsLastTenMatches: getWicketArray(),
    }
}

function getRunArray() {
    let runs = new Array(10);
    for (i = 0; i < runs.length; i++) {
        runs[i] = Math.round(Math.random() * 145);
    }
    return runs;
}

function getWicketArray() {
    let wickets = new Array(10);
    for (i = 0; i < wickets.length; i++) {
        wickets[i] = Math.abs(Math.round((Math.random() * 10) - 6));
    }
    return wickets;
}

// let player = getSingleObject();

// console.log(getObject());

// console.log("Playing eleven is " + team);

//2.Add a method to the object which prints the player’s average runs in the last five matches
player.averageRunsLastFiveMatches = function() {
    let average = 0;
    for (let i = 4; i < this.runsLastTenMatches.length; i++) {
        average += this.runsLastTenMatches[i];
    }
    return average / 5;
}

// console.log(player.averageRunsLastFiveMatches());

//3. Add a method to the object which prints the player’ s average wickets taken in the last five matches
player.averageWicketsLastFiveMatches = function() {
    let average = 0;
    for (let i = 4; i < this.wicketsLastTenMatches.length; i++) {
        average += this.wicketsLastTenMatches[i];
    }
    return average / 5;
}

//4. Add a method to the object which prints the player’ s average runs in the last’ n’ matches where’ n’ is provided by the user
player.averageRuns = function(n) {
    let average = 0;
    for (let i = n - 1; i < this.runsLastTenMatches.length; i++) {
        average += this.runsLastTenMatches[i];
    }
    return average / n;
}

//5. Add a method to the object which prints the player’ s average wickets taken in the last’ n’ matches where’ n’ is provided by the user
player.averageWickets = function(n) {
    let average = 0;
    for (let i = n - 1; i < this.wicketsLastTenMatches.length; i++) {
        average += this.wicketsLastTenMatches[i];
    }
    return average / n;
}

// console.log(player);
// // console.log(player.averageRuns(5));
// console.log(player.averageWickets(6));
// console.log(player.averageRunsLastFiveMatches());
// console.log(player.averageWicketsLastFiveMatches());


//6. Add a method to the object which can add the score in a new match to the player’ s tally.
// What properties should be updated and how ? The method should update all the properties correctly

//7. Add a method to the object which can add the number of wickets in a new match to the player’ s tally.
// What properties should be updated and how ? The method should update all the properties correctly.
player.updateMatch = function(runs, wickets) {
    if (wickets == undefined) {
        this.updateScore(runs);
        this.updateWickets(0)
    } else {
        this.updateScore(runs);
        this.updateWickets(wickets)
    }
    this.matchesPlayed += 1;
}

player.updateScore = function(score) {
    this.totalRunsScored += score;
    this.runsLastTenMatches.splice(0, 1);
    this.runsLastTenMatches.push(score);
}

player.updateWickets = function(wickets) {
    this.totalWicketsTaken += wickets;
    this.wicketsLastTenMatches.splice(0, 1);
    this.wicketsLastTenMatches.push(wickets);
}

// player.updateMatch(30,3)
// console.log(player);

// 8.Add a method to the object which takes an object of the format below as the input and updates the wickets and runs as per questions 6, 7 above.
// Example object: { runs: 32, wickets: 1 }
player.updateMatchWithObject = function(object) {
    this.updateMatch(object.runs, object.wickets)
}

player.updateMatchWithObject({
    runs: 40,
    wickets: 3
})

// 9.Add a method to the object which prints the player’ s summary details.The details needed are:
// Name,
// Specialization
// Matches played
// Total number of runs scored
// Total wickets taken
// Average runs in last ten matches
// Average wickets in last ten matches
// Overall Average runs scored

player.averageWicketsLastTenMatches = function() {
    let average = 0;
    for (let i = 0; i < this.wicketsLastTenMatches.length; i++) {
        average += this.wicketsLastTenMatches[i];
    }
    return average / this.wicketsLastTenMatches.length;
}

player.averageRunsLastTenMatches = function() {
    let average = 0;
    for (let i = 0; i < this.runsLastTenMatches.length; i++) {
        average += this.runsLastTenMatches[i];
    }
    return average / this.runsLastTenMatches.length;
}


player.printPlayer = function() {
    console.log("Name \t" + this.name)
    console.log("Specialization \t" + this.specialization)
    console.log("Matches played \t" + this.matchesPlayed)
    console.log("Total number of runs scored \t" + this.totalRunsScored)
    console.log("Total wickets taken \t" + this.totalWicketsTaken)
    console.log("Average runs in last ten matches \t" + this.averageRunsLastTenMatches())
    console.log("Average wickets in last ten matches \t" + this.averageWicketsLastTenMatches())
    console.log("Overall Average runs scored \t" + this.totalRunsScored / this.matchesPlayed)
}

// console.log(player);
// player.printPlayer();

// console.log(player.averageRunsLastFiveMatches());

// Bonus question: Write two functions which sort the array of players in ascending order by their runs scored and wickets
//taken respectively.The functions should add a property to the object denoting their runs rank or wickets rank.

function getPlayers() {
    let temp = new Object();
    let allPlayers = []
    for (i = 0; i <= 11; i++) {
        temp.name = playingEleven[i];
        temp.specialization = specialization()[i];
        temp.matchesPlayed = matchesPlayed()[i];
        temp.totalRunsScored = totalRunsScored()[i];
        temp.totalWicketsTaken = totalWicketsTaken()[i];
        temp.runsLastTenMatches = getRunArray();
        temp.wicketsLastTenMatches = getWicketArray();
        allPlayers.push(temp);
    }
    return allPlayers;
}

// specialization: "WicketKeeper-Batsman";
// matchesPlayed: 300,
//     totalRunsScored: 10050,
//     totalWicketsTaken: 68,
//     runsLastTenMatches: getRunArray(),
//     wicketsLastTenMatches: getWicketArray(),

function specialization() {
    return ["Batsman",
        "Batsman",
        "Batsman",
        "WicketKeeper-Batsman ",
        "All-Rounder",
        "Batsman",
        "All-Rounder",
        "Bowler",
        "Bowler",
        "Bowler",
        "Bowler"
    ]
}

function matchesPlayed() {
    return [
        100, 130, 230, 300, 124, 155, 310, 120, 167, 176, 127
    ]
}

function totalRunsScored() {
    return [
        15045, 13098, 12564, 10000, 1433, 1980, 1567, 2678, 1256, 890, 600
    ]
}

function totalWicketsTaken() {
    return [20, 10, 30, 25, 45, 75, 87, 200, 400, 800, 780]
}

function playingEleven() {
    return ["Rohit",
        "KL Rahul",
        "Virat Kholi",
        "MS Dhoni",
        "Hardik Pandya",
        "Rishab Pant",
        "Ravindra Jadeja",
        "Bhuvaneshwar Kumar",
        "Mohamad Shami",
        "Zaheer Khan",
        "Harbajan Singh "
    ]
}
console.log(getPlayers());