//finding final rate after offer of 10 percent
let price=[120,230,450,340,450];
for(let i=0;i<price.length;i++){
    let offer=price[i]/10;
    price[i]-=offer;
}
console.log(price);