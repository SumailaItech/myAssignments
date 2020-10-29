class Course{
    constructor(title,length,price){
        this.title = title;
        this.length = length;
        this.price = price;
    }
}

const math = new Course('math101',52,10);
console.log(math);
const chem = new Course('chem101',23,20);
console.log(chem);