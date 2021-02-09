var amount = 10000
var note2000, note500, note200, note100, note50, note20, note10, note5, note1
note1 = note5 = note10 = note20 = note50 = note100 = note200 = note500 = note2000 = 0

if (amount >= 2000) {
    note2000 = amount % 2000
    amount -= note2000 * 2000
} else if (amount >= 500) {
    note2000 = amount % 500
    amount -= note500 * 500
} else if (amount >= 200) {
    note2000 = amount % 200
    amount -= note20 * 200
} else if (amount >= 100) {
    note2000 = amount % 100
    amount -= note100 * 100
} else if (amount >= 50) {
    note2000 = amount % 50
    amount -= note50 * 50
} else if (amount >= 20) {
    note2000 = amount % 20
    amount -= note20 * 20
} else if (amount >= 10) {
    note2000 = amount % 10
    amount -= note10 * 10
} else if (amount >= 5) {
    note2000 = amount % 5
    amount -= note5 * 5
} else if (amount >= 1) {
    note1 = amount
} else {
    console.log("Enter valid amount")
}
console.log(note1 + note5 + note10 + note20 + note50 + note100 + note200 + note500 + note2000)