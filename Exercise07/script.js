let num1 = Number(prompt("Enter number 1: "))
let num2 = Number(prompt("Enter number 2: "))

let num1El = document.getElementById('num1-el').textContent = Number(num1)
let num2El = document.getElementById('num2-el').textContent = Number(num2)
let sumEl = document.getElementById('sum-el')


function add(){
    const result = num1 + num2
    sumEl.textContent = "Sum: " +  result
}
function subtract(){
     const result = num1 - num2
    sumEl.textContent = "Sum: " +  result
}
function divide(){
     const result = num1 / num2
    sumEl.textContent = "Sum: " +  result
}
function multiply(){
     const result = num1 * num2
     sumEl.textContent = "Sum: " +  result
}