// 1- Create a class called Person with three properties called firstName, lastName and age. Include a constructor that assigns these values

class Person {
    constractor
        (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastNAme = lastName;
        this.age = age;
    }

    //2-

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old;
            
}
let me= new Person("Mariam", "Nagi", 24)
console.log(me);

// Q3

class Student exetends Person{
    constractor(firstName, lastName, age, grades){
        super(firstName, lastName, age);
        this.grade=grades
    }

    //Q4
    getAAvarageGrade(){
        for(let i=0; i<this.grades.lenght;i++)
    }


    getInfo(){
        return `${super.getInfo()}. ${this.firstName}'s avarage grade is ${}
    }
    





// 3

class Student extend person{
    contractor(firstName,LastName,age,Grades){
        super(firstName,lastName,age);
        this.grades=grades;
    }


}
//Q6  

class Teacher extendands person{
    constractor(firstNmae,lastName,age,students){
        super(firstName)
    }

}
