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
        display("Wrong item entered");
        break;
    }

 } 
 let x=Playerselection();
 window.alert(x);
/* Create function Playround for one round of play and declare result  */
/* Create  function game to enter no of games and give overall result */

