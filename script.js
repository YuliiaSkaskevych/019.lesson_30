class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        }
    get personInfo(){
        return `Name: ${this.name} Age: ${this.age}`;
    }
}

class Auto {
    constructor (brand, model, year, number){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
    }
    addOwner(owner){
        if (owner.age < 18){
            console.log("Owner must be more than 18!");
        } else {
            this.ownerName = owner;
            console.log(`Owner of auto: ${owner.name}`);
        }
    }
    get autoInfo() {
    console.log(`Info about auto: ${this.brand} ${this.model} ${this.year} ${this.number} ${this.ownerName.name}`);
    this.ownerName ? this.ownerName.personInfo : console.log(`${this.brand}-${this.number} does not have the owner`);
  }

}

let person1 = new Person ('Adam Smith', 25);
let person2 = new Person ('Rada Mitchell', 30);
let person3 = new Person ('Wednesday Adams', 16);

let auto1 = new Auto ('Mazda', 'Supra', 2015, 'BA3412RR');
let auto2 = new Auto ('Huinday', 'Elantra', 2017, 'AA3564CV');

auto1.addOwner(person1);
auto2.addOwner(person2);
auto2.addOwner(person3);

auto1.autoInfo;
auto2.autoInfo;
