// scope & this keyword
//console.log("carName 1", carName)

function myFunction() {
    let carName = "Volvo"
    console.log("carname 2", carName)
}

//console.log("carName 3", carName)
myFunction()
//console.log("carName 4", carName)

let carName = "Volvo";
console.log(`carName 1 is ${carName}`)

function myFunction1() {
    console.log(`carName 2 is ${carName}`)
}

myFunction1()
console.log(`carName 3 is ${carName}`)
////////////////
myFunction3();

console.log(`carName 2 is ${carName3}`)

function myFunction3() {
    let carName = "Volvo"
}

console.log(`car name 2 is ${carName3}`)