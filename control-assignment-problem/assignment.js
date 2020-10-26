const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandomNumber = Math.random();

// if(randomNumber > 0.7){
//     alert('Your number is more than 0.7');
// }

if(randomNumber > 0.7 && anotherRandomNumber > 0.7){
    alert('Both numbers are greater that 0.7');
    console.log(randomNumber +','+ anotherRandomNumber);
}else if(randomNumber < 0.2 || anotherRandomNumber < 0.2){
    alert("one of the numbers is less than 0.2");
    console.log(randomNumber +','+ anotherRandomNumber);
}else{
    alert("None Much");
    
}

let arrayNumbers = [1,2,3,4,5,6,7,8,9];

for(let i = arrayNumbers.length; i >= 0; i--){
    console.log(arrayNumbers[i]);
}

for(const elm of arrayNumbers){
    console.log(elm);
}



