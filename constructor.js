// in ES6 `class` is used to declare a constructor function
// this is creates a object template, that are accessible and reusable.

class vegetable{
    constructor(name,count){
        this.name = name;
        this.count = count;
    }
}

let salad = new vegetable('cucumber',4)
let other = new vegetable('tomato',1)
console.log(other.name);