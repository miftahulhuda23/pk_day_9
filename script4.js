function myFunction4() {
    //debugger;
    return this;
}
myFunction4();

let person = {
    FirstName: "Jhon",
    lastName: "Doe",
    id: 55666,
    fullName: function () {
        //debugger
        return this.FirstName + " " + this.lastName
    },

}

console.log(`person fullname is ${person.fullName()}`)

let person1 = {
    fullName: function () {
        //debugger;
        return this.FirstName + " " + this.lastName;
    }
}

var person2 = {
    FirstName: "John",
    lastName: "Doe"
}

console.log(person1.fullName.bind(person2)())
person1.fullName()

/////////////
//Objects
const App = {
    start() {
        console.log('running')
    },
    end() {
        console.log('stop')
    }
}

App.start();

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    getArea() {
        return Math.PI * 2 * this.radius
    }
}

let circle = new Circle(10)
let totalArea = circle.getArea()
console.log(`this totalArea is ${totalArea}`)

const functionName1 = () => {
    console.log("no parameter")
}
functionName1()

const functionName2 = (argument1) => {
    console.log("argument1" + argument1)
}
functionName2("theFirst")

const functionName3 = argument1 => {
    console.log(argument1)
    return argument1
}

let sentence = functionName3("i'm wanna be programmer")
console.log(`this sentences is ${sentence}`)

const functionName4 = argument1 => `hi i'm argument1 with value ${argument1}`
let newSentence = functionName4("batam")
console.log(`functionName4 is ${newSentence}`)

//Destructuring

const object = {
    name: "Budi",
    gender: "Male",
    live: "Batam",
}

console.log(object)

const { name, live } = object

console.log(name, live)

const object1 = {
    name1: 'Hude',
    gender: 'Male',
    live: 'Batam'
}

const { name1, ...newObject } = object1
console.log(name1)
console.log(newObject)

const person3 = {
    name: "OmniKnight",
    class: "Support",
    level: "21",
}

const person4 = {
    ...person3,
    name: "Tide Hunter",
}

console.log(`personal 3 is `, person3)
console.log(`personal 4 is `, person4)