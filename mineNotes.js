class Human {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    // Instence Method or Instence Function
    getFullName(){
        return `The Human name is ${this.name}, and thier age is ${this.age}`; // method class 
    }

    // Static Function
    static getHumanName(){
        return "static human Name";
    }

    static getHumanNameFor(obj){
        return obj.getFullName();
    }
    
}
// let human =new Human("Mariam", 26); //creat instance of human
// let human2= new Human("Wael", 26);
//  //console.log(human);
//human.name= "Mariam";
// human.age= 23;
// console.log(human);
// console.log(human.getFullName()); // call the function
// console.log(human2.getFullName());
console.log(Human.getHumanNameFor(new Human("Wael 1",98)));
// console.log(Human.getHumanNameFor(human2));



