// // // // // // // conditional operators in javascript 

// // // // // // for(let i = 1; i <13; i++){
// // // // // //     if( i % 2 === 0) console.log(`${i} - Even`);
// // // // // //     else console.log(`${i} - Odd`);
// // // // // // }AbortSignal

// // // // // // let num = prompt("number batwo");
// // // // // // if (num >= 0){
// // // // // //     console.log("positive");
// // // // // //  } else {
// // // // // //     console.log("negative");
// // // // // //     }


// // // // // let age = prompt("Kuch fill karo ");
// // // // // if(age === null){
// // // // //     console.error("you cancelled it");
// // // // // }
// // // // // else {
// // // // //     if (age.trim() === ""){
// // // // //         console.error("ky kar rahe ho bhai ");
// // // // //     }

// // // // //     else{
// // // // //         age = Number(age.trim());
// // // // //         console.error(age);
// // // // //     }
// // // // // }



// // // // for( let i = 1; i<11; i++){
// // // //     console.log(`38 * ${i} = ${38 * i}`);
// // // // }


// // // for(let i = 1; i<11; i++){
// // //    console.log(`55 * ${i} = ${55 * i}`);
// // // }

// // let count = 0;
// //  for (let i = 1; i<15; i++){
// //    if (i > 5) {
// //       ++count;
// //       console.log(i);
// //    }
// //  }
// //  console.log(`total count is ${count}`)

// --------------------------------------------------------------

// let password = "SantoshKumar";

// let pass = prompt("Give me password");
// if (pass === null){
//    console.error("you cancelled it ")
// } else {
//    if (pass === password){
//       console.log("matched")
//    }
//    else {
//       console.log("not matched");
//    }
// }

// let attempts = 0;
// let open = false;
// let pass  = "Santosh Bro";

// let password = prompt("password Batwoo bhai");
// attempts++;

// if (password === pass) open = true;
// while (password !== pass){
//    if (attempts === 3){
//       console.error("Account Blocked")
//       break;
//    }
//    password =  prompt("password Batwoo bhai");
//    if(pass === password) open = true;{
//       attempts++;
//    }
// }
// if (open === true) console.log("Account open");






// day 37


// let attempts = 0;
// let sahipass = "santoshkr";

// let userpassword = prompt("Sahi password Batwoo");
// attempts++;

// while (attempts < 3 && sahipass != userpassword){
//    let userpassword = prompt("Sahi password Batwoo");
//    attempts++;    
// }

// if (attempts === 3 && sahipass != userpassword){
//    console.error("Account locked");
// }  else {
//    console.log("done");
// }


// let counter = 0;

// for(let i = 1; i < 6; i++){
//    let num = +prompt("number do");
//    if (num >= 0) counter++;
// }
// console.log(counter);

// day 37/// funcation class 

// function addtwonumber(numb1 , numb2){
//        return numb1 + numb2
// }
// const result = addtwonumber(583,644);
// console.log("result" , result);


// function abcd(a,b,...c){
//     console.log(a,b,c);
// }
// abcd(1,2,3,4,5,6);




// day 38


// function addtwonumber(nums){
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++ ){
//         sum = sum + nums[i];
//         console.log(sum);
//     }
// }

// addtwonumber([1,5,2]);


// const add = (a,b) => {
// //     return a + b;
// // };

// // console.log(add(5,3));


// three type of arrow function uses => this is sign !


// const add = (a,b) => a + b;
// console.log(add(5,3));


// 1. What is a closure in JavaScript?
// A closure happens
//  when an inner function remembers and
//   can access variables from its outer function,
//  even after the outer function has finished executing

//code//

//function outer() {
//     let count = 10;

//     function inner() {
//         console.log(count);
//     }

//     inner();
// }

// outer();
// 