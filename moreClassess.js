class Person {
    constructor(name, age, hightInMm) {

        this.name = name;
        this.age = age;
        this.hightInMm = hightInMm
    }

    get hightInInches() {
        return this.hightInMm / 25.4;

    }

    set hightInInches(Value) {
        this.hightInInches * 25.4;
    }

    // get highInCm() {
    //     return this.highInMm / 10;
}





let me = new Person("Mariam", 23, 1800);
console.log(me);

console.log(me.hightInInches);
me.hightInInches = 72;
console.log(me.hightInInches);

console.log(me.hightInCm);

class rectangle {
    constructor(hight, width) {
        this.highter = hight;
        this.width = width;
    }
}

class Pet {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species;
    }
    owner;
}
class Dog extends Pet{
    constractor(name,age,species){
        this.name=name;
        this.age=age;
        this.speries=
    }
    breed;

}

let cat = new Pet("Rexi", 2, "Cat");
let dog = new Pet ("Rex", 4, "Dog");
console.log(dog);

console.log(cat);
console.log(cat); 