var n = 50
var j = 1
var sum = 0
for (var i = 1; i <= n; i++) {
    sum += j
    j = (j * 10) + 1
}
console.log("sum of series is ", sum)