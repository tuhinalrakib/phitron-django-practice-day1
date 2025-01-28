const input = document.getElementById("input")
const output = document.getElementById("output")

// Grade Making 
const grade = document.getElementById("grade-btn")

grade.addEventListener("click",(e)=>{
    let mark = parseInt(input.value)
    
    if(mark >= 80 && mark <= 100){
        output.innerHTML = `<h1>Your Gade: A+</h1>`
    }else if(mark >= 70 && mark < 80){
        output.innerHTML = `<h1>Your Gade: A</h1>`
    }else if(mark >= 60 && mark < 70){
        output.innerHTML = `<h1>Your Gade: A-</h1>`
    }else if(mark >= 50 && mark < 60){
        output.innerHTML = `<h1>Your Gade: B</h1>`
    }else if(mark >= 40 && mark < 50){
        output.innerHTML = `<h1>Your Gade: C</h1>`
    }else if(mark >= 33 && mark < 40){
        output.innerHTML = `<h1>Your Gade: D</h1>`
    }else if(mark > 0 && mark < 33){
        output.innerHTML = `<h1>Your Gade: <span>F</span></h1>`
    }else{
        output.innerHTML = `<h1><span>Invalid Mark</span></h1>`
    }
})

// Find Even/ ODD Number 
const evenOddBtn = document.getElementById("evenOdd-btn")

evenOddBtn.addEventListener("click",(e)=>{
    let num = parseInt(input.value)
    if(isNaN(num)){
        alert("Please enter a valid number.")
        return
    }
    if(num % 2 === 0){
        output.innerHTML = `<h1>${num} is an Even number.</h1>`
    }else{
        output.innerHTML = `<h1>${num} is an Odd number.</h1>`
    }
})

// Array Sort 
let numbers = [12, 5, 19, 1, 8, 15, 4, 20, 7, 3, 11, 14, 18, 6, 10, 13, 16, 2, 17, 9]

numbers.sort((a, b) => a - b);

console.log(numbers)

// Find Leaf Year
const year = document.getElementById("leaf-year-btn")

year.addEventListener("click",(e)=>{
    output.innerHTML = ""
    let inputYear = parseInt(input.value)
    if(isNaN(inputYear)){
        alert("Please enter a valid year.")
        return
    }
    if((inputYear % 4 === 0 && inputYear % 100!== 0) || inputYear % 400 === 0){
        output.innerHTML = `<h1>${inputYear} is a Leap Year.</h1>`
    }else{
        output.innerHTML = `<h1>${inputYear} is not a Leap Year.</h1>`
    }
})

// Divided number from 1 to 50 by 3 and 5
const dividedBtn = document.getElementById("divided-btn")
let divisibleBy3And5 = []

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        divisibleBy3And5.push(i)
    }
}

dividedBtn.addEventListener("click",(e)=>{
    output.innerHTML = ""
    output.innerHTML = `<h1>Divisible numbers  are: ${divisibleBy3And5.join(', ')}</h1>`
})

// Bigest friend
var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const biggestBtn = document.getElementById('biggest-btn')
let biggestFriend = friends[0]

biggestBtn.addEventListener('click', (e)=>{
    output.innerHTML = ""
    for(let i=0;i<friends.length;i++){
        if(friends[i].length > biggestFriend.length){
            biggestFriend = friends[i]
        }
    }
    output.innerHTML = `<h1>The biggest friend is: <span>${biggestFriend}</span></h1>`
})

// Duplicate number remove 
let number = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueBtn = document.getElementById("unique-btn")
let largestNumber = number[0]

uniqueBtn.addEventListener("click",(e)=>{
    output.innerHTML = ""
    for(let i=0;i<number.length;i++){
        for(let j=i+1;j<=number.length;j++){
            if(number[i] === number[j]){
                number.splice(j, 1);
            }
        }
    }
    
    for(let i=0;i<number.length;i++){
        if(number[i] > largestNumber){
            largestNumber = number[i]
        }
    }

    output.innerHTML = `<h1>Unique Numbers are: ${number.join(', ')}</h1><br/>`
    output.innerHTML += `<h1>The largest number is: <span>${largestNumber}</span></h1>`
})


console.log(largestNumber)
