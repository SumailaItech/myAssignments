const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if(randomNumber > 0.7){
    alert('Your number is more than 0.7');
}

let arrayNumbers = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i < arrayNumbers.length; i++){
    console.log(arrayNumbers[i]);
}

for(const elm of arrayNumbers){
    console.log(elm);
}