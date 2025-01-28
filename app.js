// Grade Making 
let mark = 300

if(mark >= 80 && mark <= 100){
    console.log("Your Gade: A+")
}else if(mark >= 70 && mark < 80){
    console.log("Your Gade: A")
}else if(mark >= 60 && mark < 70){
    console.log("Your Gade: A-")
}else if(mark >= 50 && mark < 60){
    console.log("Your Gade: B")
}else if(mark >= 40 && mark < 50){
    console.log("Your Gade: C")
}else if(mark >= 33 && mark < 40){
    console.log("Your Gade: D")
}else if(mark > 0 && mark < 33){
    console.log("Your Gade: F")
}else{
    console.log("Invalid Mark")
}

const input = document.getElementById("input")
const evenOddBtn = document.getElementById("evenOdd-btn")
const output = document.getElementById("evenOdd-output")

evenOddBtn.addEventListener("click",(e)=>{
    let num = parseInt(input.value)
    if(isNaN(num)){
        alert("Please enter a valid number.")
        return
    }
    if(num % 2 === 0){
        output.innerHTML = `<h>${num} is an even number.</h>`
    }else{
        output.innerHTML = `<h>${num} is an odd number.</h>`
    }
})