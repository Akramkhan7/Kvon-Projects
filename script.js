// console.log('hello');

// function printHello (){
//     console.log('Printing hello');
// }
// printHello();

// //IIFS Immediately Invoked function  expression
// (function(){
//      console.log('Printing second hello');
// }) ();

// //closer
// function outer() {
//   let outerVal = "This is outer val";
//   function inner() {
//     console.log(outerVal) ;
//   }
//   return inner;
// }

// const closer = outer();
// closer();

//Promises

// const data = { name: 'Akram', age: '20' };

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
// .then((res)=>{
// console.log(res)
// })
// .catch(err =>{
//     console.log(err);
// })

// async function fetchData() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/10 ")
//     const data = await res.json();
//     console.log('data fetched',data)
// }

// fetchData();

// EVENT DELEGATION

// document.getElementById('btn').addEventListener('click', (e)=>{
//     if(e.target.tagName === 'BUTTON'){
//         e.target.remove()
//         console.log(`Target ${e} is deleted`)
//     }
// })

// REDUCE IN ARRAY

// const num = [1,2,4,5,5];

// const sum = num.reduce((acc,currval)=>{
//     return acc + currval;
// },0)

// console.log(sum);

//CURRYING
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const sum = add(2);
// console.log(sum(4));

// GENERATOR FUNCTION

// function* addSum() {
//     let num = 1;
//     while(true){
//         yield num;
//         num++;
//     }
// }

// const add = addSum();

// console.log(add.next().value)
// console.log(add.next().value)
// console.log(add.next().value)
// console.log(add.next().value)
// console.log(add.next().value)

// Shallow Copy

// const org = { name: "Akram", address: { city: "delhi" } };

// const orgCopy = {...org};

// orgCopy.address.city = 'jaipur'
// console.log(org);  //Changed. 


const org = { name: "Akram", address: { city: "delhi" } };

const deepCopy = JSON.parse(JSON.stringify(org));

deepCopy.address.city = 'meow'
console.log(org); //DOesnt change , same location due to deepcopy
