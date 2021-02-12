var n = 10
    //var n = parseInt(prompt("Enter a number"))
var count = 0
var sum = 0
var i = 1
while (count != n) {
    if (i % 2 == 0) {
        sum += i
        count++
    }
    i++
}
console.log("Sum up to n even terms is ", sum)