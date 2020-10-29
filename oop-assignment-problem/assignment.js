class Course{
    constructor(title,length,price){
        this.title = title;
        this.length = length;
        this.price = price;
    }

    lengthPerPrice(){
        return this.lengthPerPrice = this.length/this.price;
    }

    summary(){
        const bookSummary =`
        The Summary of the Book
        title: ${this.title},
        Length: ${this.length},
        Price: ${this.price}
        `;
        return bookSummary;
    }
}

const math = new Course('math101',52,10);
console.log(math.lengthPerPrice());
console.log(math.summary());
const chem = new Course('chem101',23,20);
console.log(chem);