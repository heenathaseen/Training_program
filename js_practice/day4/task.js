let cricketPlayer = {
    name : "Rahul Sharma",
    specialization : "BatsMan ",
    matchesPlayed : 10,
    totalNumRunScored : 450,
    totalWickets : 2,
    totalRunsIndividual : [50,45,35,55,40,60,35,45,25,60],
    totalWicketsIndividual : [0,0,0,0,1,0,0,1,0,0],
    getAverageFunc :function average(){ 
      

       for(let i=5;i<this.totalRunsIndividual.length;i++){

            Total += this.totalRunsIndividual[i];  

            console.log(Total);

            av=Total/5;

           

        } 

         console.log("average will be "+av);

      } 

        

      

}

cricketPlayer.getAverageFunc();

function describeCricketPlayer(cricketPlayer)  {

    console.log(`I am a ${cricketPlayer.name}`);

    console.log(`Specialisation  ${cricketPlayer.specialization}`);

    console.log(`Mathes Played  ${cricketPlayer.matchesPlayed}`);

    console.log(`Total Runs Recorded  ${cricketPlayer.totalNumRunScored}`);

    console.log(`Total Wicket Got  ${cricketPlayer.totalWickets}`);

    console.log(`Total Runs Individual got  ${cricketPlayer.totalRunsIndividual}`);

    console.log(`Total Wickets Individual Got  ${cricketPlayer.totalWicketsIndividual}`);

 }

describeCricketPlayer(cricketPlayer);