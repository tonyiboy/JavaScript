
//create a function that subtracts two numbers and alerts the difference
function subTwoNumsAndAlert(n1,n2){
    alert( n1 - n2)
}
subTwoNumsAndAlert(50,30)

//create a function that divides three numbers and console logs the quotient
function dividesThreeNumsAndLogs(num1,num2,num3){
    console.log( num1 / num2 / num3 )
}
dividesThreeNumsAndLogs(12,4,3)

//create a function that multiplys three numbers and returns the product
function multiplyThreeNumsAndReturn(num1,num2,num3){
    return num1 * num2 * num3
}
let product = multiplyThreeNumsAndReturn(5,10,2)
alert(product)


//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(n1,n2,n3){
    return (n1 + n2) % n3
}
console.log(addTwoAndDivide(3,3,2))

