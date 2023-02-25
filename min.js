class person {
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    //this are the method of the person class 
    move(){
       console.log(`${this.name}  of age ${this.age} and  is going to  America`); 
    }
    grow(){
        console.log(`${this.name}  has made ${this.age} years  now`);
    }
}
//this is the instance of the person class
const newPerson =new person('Jaffa', 26);

newPerson.move()
newPerson.grow();

console.log(typeof newPerson)
console.log(typeof newPerson.age)
console.log(typeof person)




// NB  you cant  overwritte a class using the same class name inside  itself like below
class simple{
    constructor(){
        simple = '100';

    }
}
simple = '100';