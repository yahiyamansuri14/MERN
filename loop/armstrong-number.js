var n = 153
var temp = n
var numberOfDigits = 0
while (n >= 1) {
    //   n = n % 10
    numberOfDigits++
    /*   console.log(numberOfDigits) */
    n /= 10
}
//numberOfDigits = n.toString.length
console.log(numberOfDigits)
    //check whether a number is armstrong or not
var temp_new = temp
var arm_number = 0
var rem
    //console.log(temp)
while (temp != 0) {
    rem = temp % 10
    arm_number = arm_number + Math.pow(rem, numberOfDigits)
        //console.log(arm_number)
    temp = Math.floor(temp / 10)
        //console.log(temp)
}
if (temp_new == arm_number)
    console.log("Its a armstrong number")
else
    console.log("Its not an armstrong number")