let a = 20;
let b = 10;
let sum = a+b;
let sub = a-b;
let mul = a*b;
let div = a/b;
let fev = a%b;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(fev);


if (sum >10) console.log("Right");
else console.log("Wrong");

let book ={
    bookTitle: "5 am club",
    author: "Robin Sharma",
    price: 150,
    read: function () {
        console.log("Read the book");
    },
};