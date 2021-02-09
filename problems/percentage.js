var physics = 100
var chemistry = 100
var maths = 100
var biology = 100
var english = 100

var total = physics + chemistry + maths + biology + english
var percentage = total / 5
if (percentage >= 90 && percentage <= 100)
    console.log("A grade")
else if (percentage >= 80 && percentage <= 89)
    console.log("B grade")
else if (percentage >= 70 && percentage <= 79)
    console.log("C grade")
else if (percentage >= 60 && percentage <= 69)
    console.log("D grade")
else if (percentage >= 40 && percentage <= 59)
    console.log("E grade")
else
    console.log("F grade")