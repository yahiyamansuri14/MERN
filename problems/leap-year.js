var year = 200
if (year % 400 == 0 && year % 100 == 0 && year % 4 == 0)
    console.log("its leap year")
else
    console.log("its not a leap year")