// let n = 10; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 1; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "a";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);







// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }


let colum = 5;
let string = "";
for (let i = 1; i <= colum; i++) {
 
  
   for (let k = 0; k < i; k++) {
    string += "A";
  }
  string += "\n";
}
console.log(string);