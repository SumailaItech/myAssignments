class Course{
  
    constructor(title,length,price){
        this.title = title;
        this.length = length;
        this.setPrice = price;
    }
    set setPrice(price){
        if(price < 0){
            throw 'Invalid Price';
        }
        this.price =price;
    }

    get getPrice(){
        return `\$${this.price}`;
    }

    lengthPerPrice(){
        return this.lengthPerPrice = this.length/this.price;
    }

    summary(){
        const bookSummary =`
        The Summary of the Book
        title: ${this.title},
        Length: ${this.length},
        Price: ${this.getPrice}
        `;
        return bookSummary;
    }
}

class PracticalCourse extends Course{
    constructor(title,length,price,numOfExercises){
        super(title,length,price);
        this.numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course{
    constructor(title,length,price){
        super(title,length,price);
    }

    publish(){
        console.log('Publishing....');
    }
}

const practical = new PracticalCourse('Practical Book',60,20,3);
console.log('********************************');
console.log('Practical Class section')
console.log('********************************');
console.log(practical);
console.log(practical.summary());
console.log(practical.lengthPerPrice());

console.log('********************************');
console.log('Theoretical Class section')
console.log('********************************');

const theory = new TheoreticalCourse('Theory Book',105,40,10);
console.log(theory);
console.log(theory.summary());
console.log(theory.lengthPerPrice());
console.log(theory.publish());


console.log('********************************');
console.log('Course Class section')
console.log('********************************');
const math = new Course('math101',52,12);
console.log(math.lengthPerPrice());
console.log(math.summary());
const chem = new Course('chem101',23,20);
console.log(chem);