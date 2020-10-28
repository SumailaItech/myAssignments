// Task one
const arrNumber =[3, 5, 6, 7,4,8,9,21];

const filterNum = arrNumber.filter(num=>num > 5);

console.log(filterNum);

const mapNum = arrNumber.map((num, idx,arrNumber) =>{
    const numProp ={num:arrNumber[idx]};
    return numProp;
});

console.log(mapNum);

const reduceNum = arrNumber.reduce((pValue,cValue)=>pValue + cValue);
console.log(reduceNum)

// Task two
const findMax = (...arrNumber) =>{
    const maxNum = Math.max(...arrNumber);
    
    return maxNum;
}

const maxNum = findMax(...arrNumber);

// task three

const findMax1 = (...arrNumber) =>{
    const maxNum = Math.max(...arrNumber);
    const minNum = Math.min(...arrNumber);
    return [maxNum, minNum];
}

const [maxNum1, minNum] = findMax1(...arrNumber);
console.log('Max is '+maxNum1 +' and min is '+minNum);