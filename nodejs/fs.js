const fs = require("fs");

// //const {add,product} = require("./basic.js");

// const {product} = require('./basic.js');

// console.log(add(5,3));

// synchronously and Asynchronously method 

// Asynchronous Method 

// fs.open('abc.txt', (err,data)=>{
//     if(err){
//         console.log('Failed to open file');
//     }
//     else
    
//     console.log('File open Successfully');
    
// })

// Synchronously Method 

//  fs.openSync('abc.txt');

//  console.log('File open Successfully');

// Read Method

// let t1 = performance.now();
// console.log('Product is :',product(5,3));
// fs.readFile('abc.txt','utf-8',(err,data)=>{
//     if(err)
//     console.log('Failed to read File');
     
//     else
//     console.log(data);
// });

// let data = fs.readFileSync('abc.txt','utf-8');

// console.log(data);
// console.log('Addition is : ',add(15,13));
// let t2 = performance.now();
// console.log('Time difference is : ',t2-t1);

// Write Method 

// let txt = `#include <stdio.h>

// int main ()
// {
//     // printf (" Good morning ");
//     printf ("Learning NodeJS);
// }`;

// fs.writeFile("basic.c",txt,(err,data)=>}{
//     if (err) console.log("Filed to write File");
//     else console.log("File Written successfully")
// });
// fs.writeFileSync("hello.c",txt);

// console.log("File Written successfully");

// Append Method 

// let txt = `// Good morning`;

// fs.appendFile("basic.c",txt,(err,data)=>{
//     if (err) console.log("Filed to write File");
//     else console.log("File Append Successfully");
// });

// close 

// fs.close(2,(err) => {
//     if (err) console.log("Failed to close File");
//     else console.log("File Closed Successfully");
// })
