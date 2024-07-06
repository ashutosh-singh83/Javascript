//total cost
let itemPrice=prompt("Enter the price of 1 item");
let quantity=prompt("Enter quantity of items");
let isDiscount=prompt("is there a discount");
let finalCost=0;
if(isDiscount==true){
    let discount=prompt("Enter percentage of discount");
    let totalPrice=itemPrice*quantity;
    finalCost=totalPrice-(totalPrice*discount/100);
}else{
    finalCost=itemPrice*quantity;
}
console.log("The final cost is",finalCost);
// let itemPrice = parseFloat(prompt("Enter the item price:"));
// let quantity = parseInt(prompt("Enter the quantity:"));
// let hasDiscount = confirm("Do you have a discount?");

// let totalCost = itemPrice * quantity;

// if (hasDiscount) {
//   totalCost *= 0.9; // 10% discount
// }

// console.log("Total cost: $" + totalCost.toFixed(2));
