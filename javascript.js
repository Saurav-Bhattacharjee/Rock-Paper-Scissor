/* Create function "getComputerChoice" to return Rock Paper Scissor */
function getComputerChoice(){
    /* Create an array of three strings */
    const item=["ROCK","PAPER","SCISSOR"];
    console.log(item);
    /* Create a random number from 0,1,2 */
    
    let select = Math.floor(Math.random()*3);
    /* Math.floor()is the greatest integer function and math.random is the generator of any number between 0 and 1.Also multiplying math.random()*Max =(Max -1)Nos of integers */
/*     Assign the random number to the index of the array to show select the array list */
    let computerselect=item[select];
    return computerselect;
}
getComputerChoice();


/* Create function Playerselection to make his choice*/
 function Playerselection(){
/*     Take Choice */
    let choice=prompt("Rock,Paper or Scissor???Make your move");
    if(choice.toUpperCase()==="ROCK"){
        return "ROCK";
    }else if(choice.toUpperCase()==="PAPER"){
        return "PAPER";
    }else if(choice.toUpperCase()==="SCISSOR"){
        return "SCISSOR";
    }else{
        return "Wrong key pressed";
        
    }

 } 
 
/* Create function playRound for one round of play and declare result  */

/*  Define playRound function with two parameters.These two parameters are the two previous functions */
function playRound(){
    let CompChoice=getComputerChoice();
    let PlayerChoice=Playerselection();
        if(PlayerChoice=="Wrong key pressed")
        {
            Window.alert("Match forfeit due to wrong key pressed");
        }else if(PlayerChoice=="ROCK"&& CompChoice=="PAPER"){
                window.alert("Computer wins");
                return "C";
            }else if(PlayerChoice=="ROCK"&& CompChoice=="SCISSOR"){
                window.alert("You Win");
                return "P";
            }else if(PlayerChoice=="ROCK"&& CompChoice=="ROCK"){
                window.alert("Nobody wins");
                return "N";
            }else if(PlayerChoice=="PAPER"&& CompChoice=="ROCK"){
                window.alert("You win");
                return "P";
            }else if(PlayerChoice=="PAPER"&& CompChoice=="PAPER"){
                window.alert("Nobody wins");
                return "N";
            }else if(PlayerChoice=="PAPER"&& CompChoice=="SCISSOR"){
                window.alert("Computer wins");
                return "C";
            }else if(PlayerChoice=="SCISSOR"&& CompChoice=="ROCK"){
                window.alert("Computer wins");
                return "C";
            }else if(PlayerChoice=="SCISSOR"&& CompChoice=="PAPER"){
                window.alert("You win");
                return "P";
            }else if (PlayerChoice=="SCISSOR"&& CompChoice=="SCISSOR"){
                window.alert("NOBODY WINS");
                return "N";
            }
 }
         



 
/* Create  function game to enter no of games and give overall result */

function game(){
/*     Enter the number of games i.e.best of how many games */
    let n=prompt("Enter the number of games you wanna fight with??");
/*     Enter for loop where n=no of games */
let playerwin=0;
let compwin=0;
    for(let i=0;i<n;i++){
/*         if else statement for counting the number of wins */
let match=playRound();
if(match=="P"){
    playerwin=playerwin+1;
}else if(match=="C"){
    compwin=compwin+1;
}else{
/*     discard */

}
}
if(playerwin > compwin){
    window.alert("YOU WIN THE TOURNAMENT");
}else if (playerwin < compwin){
    window.alert("Shame!Computer wins the tournament");

}else{
    window.alert("Match drawn");
}
}
game();