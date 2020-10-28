const arrNumber =[3, 5, 6, 7,4,8,9];

const filterNum = arrNumber.filter(num=>num > 5);

console.log(filterNum);

const mapNum = arrNumber.map((num, idx,arrNumber) =>{
    const numProp ={num:arrNumber[idx]};
    return numProp;
});

console.log(mapNum);

const reduceNum = arrNumber.reduce((pValue,cValue)=>pValue + cValue);
console.log(reduceNum)