"use strict";

// 1 //

function countup() {
    for (let add = -10; add <= 0; add++) {
        console.log(add);
      }
}
countup()

// 2 //

const array = [1,2,3,4,5,6,7,8,9,10];

function more5(ar){
    return ar.filter((a) => a > 5);
}
console.log(more5(array));

// 3 //

const travel = {
    route: ["Rome","Paris","London"],
    price: 2540,
    date: "2060-08-08",
    transport: ["Car","Airplane"],
    group: "4+"
    
}
for (const [key, value] of Object.entries(travel)) {
    console.log(`${key}: ${value}`);
  }