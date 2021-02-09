var salary = 100000
var grossSalary
if (salary <= 10000)
    grossSalary = salary + ((salary * 20) / 100) + ((salary * 80) / 100)
else if (salary <= 20000)
    grossSalary = salary + ((salary * 25) / 100) + ((salary * 90) / 100)
else if (salary > 20000)
    grossSalary = salary + ((salary * 30) / 100) + ((salary * 95) / 100)

console.log(grossSalary)