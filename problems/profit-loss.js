var sellingPrice = 1000
var purchasePrice = 2000
if (sellingPrice < 0 || purchasePrice < 0)
    console.log("Enter valid price")
else if (sellingPrice > purchasePrice)
    console.log("Profit is", (sellingPrice - purchasePrice))
else if (sellingPrice < purchasePrice)
    console.log("Loss is ", (purchasePrice - sellingPrice))
else
    console.log("No loss or profit")