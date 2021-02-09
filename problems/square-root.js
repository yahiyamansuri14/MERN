var a = 5
var b = 3
var c = 10

var D = (b * b) - 4 * a * c
var root1
var root2
if (D > 0) {
    root1 = ((b * b) - Math.sqrt(D)) / 2 * a
    root2 = ((b * b) + Math.sqrt(D)) / 2 * a
    console.log("root1:", root1, "root2:", root2)
} else if (D == 0) {
    root1 == root2 == -b / 2 * a
    console.log("root1:", root1, "root2:", root2)
} else {
    var real = -b / (2 * a)
    var img = Math.sqrt(D) / (2 * a) // will give NaN
    console.log("root1:", real, " + i ", img)
    console.log("root2:", real, " - i ", img)
}