/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = '20'

if(votingAge > 18) {
    console.log('true');
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let ageofschool = '6'
let toyoung = '4'

if (ageofschool > 5 ) {
    console.log('old enough');
} else if (toyoung === '4'){
    console.log('sorry not old enough');
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year ='1999';
let integer = parseInt(year, 10);
console.log(year)




//Task d: Write a function to multiply a*b 
const add = function(a,b){
    console.log(a*b);
}
add(3, 3)




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const age = function(a,b){
    console.log(a*b);
}
age(21,7)


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function feed(age,pounds){
    if(age >= 1 && pounds <=5){
return .05*pounds  
}else if(age >= 1 && pounds <= 10){
    return .04*pounds
}else if(age >= 1 && pounds <= 15){
    return .03*pounds
}else if(age >= 1 && pounds > 15){
    return .02*pounds
}
 else if(age <=.4 ){
    return .1*pounds
}else if(age <=.7 ) {
    return .05*pounds
}else if(age <=1) {
    return .04*pounds
}

}

console.log(feed(1, 15));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

 

function game(choice){
    let player = choice;
    let computer = Math.random();
    let final = 'You Lose';
    if (player ==='rock'){
        player = 1;
        if (computer === 2){
            final = 'You Lose'
        } else if (computer === 1){
            final = 'You tie'
        } return final;
    }
} console.log(game('rock'))
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


let KM = '30';
let Miles = parseInt(KM, 6);
console.log(Miles)



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let Feet ='100';
let CM = parseInt(Feet, 12);
console.log(CM)



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(num) {
    let i = num;
    let thing = 'bottles';


    for ( i; i > 0; i--) {
       if (i === 1) {
           thing = "bottle";
       } 


       let line1 = `${i} ${thing} of soda on the wall ${i} ${thing} of soda.`;
       let line2 = `Take one down, pass it around, ${ i - 1} bottles soda on the wall`;

       if ((i - 1) === 1) {
           line2 = line2.replace("bottles", "bottle");
       }
       console.log(`${line1}\n${line2}\n`)
    }
       
    
}
console.log(annoyingSong(99));
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function Grading(score) {
    let gscore;
  
    switch(true) {
      case (score <= 100 && score >= 90):
         gscore = 'A';
          break;
      case (score <= 89 && score >= 80):
          gscore = 'B';
           break;
      case (score <= 79 && score >= 70):
          gscore = 'C';
           break;
         case (score <= 69 && score >= 60):
          gscore = 'D';
           break;
      case (score <= 59 && score >= 0):
          gscore = 'F';
          break;
  
      case (score > 100 && score < 0):
          gscore = 'INVALID SCORE';
          break; 
  
      default:
        return 'INVALID SCORE';
    }
    
    var last_digit = score%10;
    if(last_digit <=2 && last_digit >= 0 && score != 100){
      gscore+='-';
    }
    else if((last_digit <=9 && last_digit >= 7) || score == 100){
      gscore+='+';
    }
  
    return gscore;
  };
  
  console.log(Grading(95));
  console.log(Grading(85));
  console.log(Grading(75));
  console.log(Grading(65));
  console.log(Grading(55));

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





