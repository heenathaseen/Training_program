let cricketPlayer = {
    name : "Rahul Sharma",
    specialization : "BatsMan ",
    matchesPlayed : 10,
    totalNumRunScored : 450,
    totalWickets : 2,
     totalRunsIndividual : [50,45,35,55,40,60,35,45,25,60],
     totalWicketsIndividual : [0,0,0,0,1,0,0,1,0,0],
     describe :function ()  {
               console.log(   `I am a ${this.name}`);
               console.log(`Specialisation  ${this.specialization}`);
               console.log(`Mathes Played  ${this.matchesPlayed}`);
               console.log(`Total Runs Recorded  ${this.totalNumRunScored}`);
               console.log(`Total Wicket Got  ${this.totalWickets}`);
               console.log(`Total Runs Individual got  ${this.totalRunsIndividual}`);
               console.log(`Total Wickets Individual Got  ${this.totalWicketsIndividual}`);
            },
            describe2 : function(){
             var averageRuns  = 0;
             var sum = 0;     
            //  var range       
             for(var i =this.totalRunsIndividual.length-1; i>this.totalRunsIndividual.length-6; i--){
                   sum = sum + this.totalRunsIndividual[i]  ; 
                        
             }
             console.log(sum);
             averageRuns =  sum/5;
        //    console.log("HI");
            console.log(averageRuns);
            },
            describe3 : function(){
                var averageWickets  = 0;
                var sum = 0;     
               //  var range       ///length -5 
                for(var i =this.totalWicketsIndividual.length-1; i>this.totalWicketsIndividual.length-5; i--){
                      sum = sum + this.totalWicketsIndividual[i]  ; 
                           
                }
                console.log(sum);
                averageWickets =  sum/5;
           //    console.log("HI");
               console.log(averageWickets);
               },
            describe4 : function(){
                var n = 2;
                if(n>this.totalRunsIndividual.length) {
                    console.log("Entered number is more than match played by the player");
                }
                else {
                    var averageRuns  = 0;
                    var sum = 0;     
                   //  var range       
                    for(var i =this.totalRunsIndividual.length-1; i>this.totalRunsIndividual.length-(n+1); i--){
                          sum = sum + this.totalRunsIndividual[i]  ; 
                               
                    }
                    console.log(sum);
                    averageRuns =  sum/n;
               //    console.log("HI");
                   console.log(averageRuns);
                }
               
            },
            describe5 : function(){
                var n = 6;
                if(n>this.totalWicketsIndividual.length) {
                    console.log("Entered number is more than match played by the player");
                }
                else {
                    var averageWickets  = 0;
                    var sum = 0;     
                   //  var range       
                    for(var i =this.totalWicketsIndividual.length-1; i>this.totalWicketsIndividual.length-(n+1); i--){
                          sum = sum + this.totalWicketsIndividual[i]  ; 
                               
                    }
                    console.log(sum);
                    averageWickets =  sum/n;
               //    console.log("HI");
                   console.log(averageWickets);            
                }
            },
            describe6 : function(){
                var runsScored = 45;
                var wicketsTaken = 0;
                this.matchesPlayed++;
                this.totalRunsIndividual.push(runsScored);
                this.totalWicketsIndividual.push(wicketsTaken);
                console.log(this.totalRunsIndividual);
                console.log(this.totalWicketsIndividual);
            },
            describe7 : function(){        
                var runsScored = 0;
                var wicketsTaken = 1;
                this.matchesPlayed++;
                this.totalRunsIndividual.push(runsScored);
                this.totalWicketsIndividual.push(wicketsTaken);
                console.log(this.totalWicketsIndividual);
                console.log(this.totalRunsIndividual);
            },
            describe8 : function(){        
                var updateData = {'runs' : 45, 'wickets' : 2};
                var updateRuns = updateData['runs'];
                var updateWickets = updateData['wickets'];
                this.totalRunsIndividual.push(updateRuns);
                this.totalWicketsIndividual.push(updateWickets);
                this.matchesPlayed++;
                console.log(this.totalWicketsIndividual);
                console.log(this.totalRunsIndividual);

            },
}
cricketPlayer.describe();
cricketPlayer.describe2();
cricketPlayer.describe3();
cricketPlayer.describe4();
cricketPlayer.describe5();
cricketPlayer.describe6();
cricketPlayer.describe6();
cricketPlayer.describe7();
cricketPlayer.describe8();





//   function myCricketFunc(cricketPlayer1){
// //            console.log("Player Details");
// //         //    cricketPlayer.name;

// //   }
//   var  details = myCricketFunc(cricketPlayer);
//   console.log(details);

// console.log("Team");
// let Team =["Rahul(AllRounder)","GG(Bowler)"," Heena(BatsMan) "," Rames(Bowler & Batsman)"," Rupesh(WicketKeeper)","Keerivasan(Batsman)","Pavithra(BatsMan&Bowler)","Poornima(Bowler)","Archana(Bowler)","Sambhavi(Batsman)"];
// console.log(Team);
// var mymap = new Map ();
// for(var i=0; i<Team.length; i++){
// mymap[`${Team[i]}`] = Math.floor((Math.random() * 10) + 1);
   
//     }
//     console.log(mymap);


// var n = Team.length;
// console.log(n);
// function random(){
// for(var i=0; i<n; i++){
// Team[i] =Math.floor((Math.random() * 10) + 1);
// }
// //console.log(Team);
// return Team;
// }

// let randomnumber=random();
// console.log(randomnumber);

