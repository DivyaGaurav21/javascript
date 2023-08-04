//---------------------------------------------------------
//---Arrow Fn-----
// const obj = {
//     name: 'John',
//     greet: function() {
//       setTimeout(() => {
//         console.log(`Hello, ${this.name}!`); // `this` refers to obj
//       }, 1000);
//     }
//   };

//   obj.greet(); // Output: Hello, John!

// -------
// const multiplyNumbers = (a, b) => a * b;
// console.log(multiplyNumbers(2, 3)); // Output: 6
// --------
// const addNumbers = (a, b) => {
//     return a + b;
//   };
//   console.log(addNumbers(2, 3)); // Output: 5

// -----------------------------------------------------------------

//-----Spread Parameter------
// . It provides a convenient way to copy or merge arrays, pass multiple
// arguments to functions, or create new arrays with existing elements.
//  The spread syntax uses the ellipsis (...) notation.

// const numbers = [1, 2, 3];
// const expandedNumbers = [...numbers, 4, 5];
// console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5]
// --------
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];
// console.log(copiedArray); // Output: [1, 2, 3]
// -------
// function sum(a, b, c) {
//     return a + b + c;
//   }
//   const numbers = [1, 2, 3];
//   const result = sum(...numbers);
//   console.log(result); // Output: 6
// -------
// const person = {
//     name: 'John',
//     age: 30,
//     profession: 'Engineer'
//   };
//   // Update the age property
//   const updatedPerson = {
//     ...person,
//     age: 31
//   };

//   console.log(updatedPerson);

// ------------------------------------------------------------------
// //-------Rest Parameter-------------
// The rest parameter is a feature in JavaScript that allows a
//  function to accept an indefinite number of arguments as an array

// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//       total += num;
//     }
//     return total;
//   }

//   console.log(sum(1, 2, 3));               // Output: 6
//   console.log(sum(4, 5, 6, 7, 8));         // Output: 30
//   console.log(sum(2, 4, 6, 8, 10, 12));    // Output: 42
// ------------
// function concatenate(separator, ...strings) {
//     return strings.join(separator);
//   }
//   console.log(concatenate('-', 'a', 'b', 'c'));   // Output: 'a-b-c'
//   console.log(concatenate(' ', 'Hello', 'World')); // Output: 'Hello World'

// --------------------------------------------------------------------

//------Terniary operator--------
// const age = 25;
// const isAdult = age >= 18 ? 'Adult' : 'Minor';
// console.log(isAdult); // Output: 'Adult'
// ---------
// function getDiscount(isMember) {
//     return isMember ? 0.2 : 0.1;
//   }
//   console.log(getDiscount(true));  // Output: 0.2
//   console.log(getDiscount(false)); // Output: 0.1

// -------------------------------------------------------------------

// conditional rendering with logical operator
// function checkPermissions(user) {
//     return user && user.isAdmin ? "Admin" : "Regular User";
//   }
//   // Usage
//   const user = {
//     name: "John Doe",
//     isAdmin: true
//   };
//   console.log(checkPermissions(user)); // Output: "Admin"
// // -------
// console.log(true && 'some string');
// console.log(false && 'no string')

// --------------------------------------------------------------------

//---optional chaining--------
// Optional chaining is a feature introduced in JavaScript that allows you
// to safely access nested properties or call functions on an object without
//  worrying about potential null or undefined values.
//  It helps to avoid runtime errors when working with deeply nested
//   objects or when properties may not exist.
// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Example City",
//       country: "Example Country"
//     }
//   };
//   // Accessing nested property with optional chaining
//   const country = person?.address?.country;
//   console.log(country); // Output: "Example Country"

// -------------------------------------------------------------------

//--Array Map method-------
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// --------
// const persons = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Tom", age: 35 }
//   ];
//   const personNames = persons.map((person) => person.name);
//   console.log(personNames); // Output: ["John", "Jane", "Tom"]
//   --------
// const employees = [
//     { id: 1, name: "John", salary: 50000 },
//     { id: 2, name: "Jane", salary: 60000 },
//     { id: 3, name: "Tom", salary: 70000 }
//   ];
//   const salaries = employees.map((employee) => employee.salary);
//   console.log(salaries); // Output: [50000, 60000, 70000]

// --------------------------------------------------------------------

// ----Array Filter Method-------
// The filter() method in JavaScript is used to create a new array that
// contains elements from the original array that pass a certain condition
//  specified by a filtering function

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]
// ------
// const employees = [
//     { id: 1, name: "John", salary: 50000 },
//     { id: 2, name: "Jane", salary: 60000 },
//     { id: 3, name: "Tom", salary: 70000 }
//   ];

//   const highEarners = employees.filter((employee) => employee.salary >= 60000);

//   console.log(highEarners);
//   // Output: [
//   //   { id: 2, name: "Jane", salary: 60000 },
//   //   { id: 3, name: "Tom", salary: 70000 }
//   // ]
// --------
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)

// --------------------------------------------------------------------------
//-----ASYNCHRONOUS JS--------
// -----fetch function------
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res=>res.json())
// .then(data => console.log(data))
// console.log('datas after fetch')

//-----async , await-------
// async function fetchData(){
//    let res = await fetch("https://jsonplaceholder.typicode.com/todos")
//    let data = res.json();
//    console.log(data)
// }
// fetchData()
// console.log('data after async await')

// --------------------------------------------------------------------------

// CODER DOST YOUTUBE VIDEO LECTURE
// --------------------------------------------------------------------//

// let languages = 'javas javaScript ';
// let result = languages.lastIndexOf('S');
// console.log(result);
// -------------
// let obj1 = {};
// let obj2 = new Object();
// var obj3 = {};
// console.log(obj1 == obj3, obj1 == obj2);
// --------------
// const arr = [2, 3, 4, 5, 6];
// let sum = 0;
// const squareFn = (n) => {
//     sum += n;
// }
// arr.forEach(squareFn)
// console.log(sum)
// ---------------
// const numbers = [65, 44, 12, 4];
// function myFunction(item, index, arr) {
//     arr[index] = item * 10;
// }
// numbers.forEach(myFunction)
// console.log(numbers)
// ------------------
// const numStr = '3.55';
// const result = parseInt(numStr);
// console.log(result); // Output: 3.14

// -------------------------------------------------------------------//

// let languages = 'java javaScript python cSharp';
// let result = languages.lastIndexOf('S');
// console.log(result);
// -------------
// let variable = 'hello programmers';
// let result = Number(variable);
// console.log(result);
// -------------
// let num1 = 32;
// let num2 = '32';
// let result1 = num1 !== num2;
// let result2 = num1 != num2;
// console.log(result1, result2);
// --------------
// let str = 'Hello Programmers';
// let result = str.includes('r');
// console.log(result);
// --------------
// let num1 = 2;
// let num2 = 5;
// let result = num1 ** num2 * 2;
// console.log(result);
// -----------------
// let num1 = [1, 2, 4, 5];
// let num2 = [6, 5, 8, 0];
// let result = num1.concat(num2);
// console.log(result);
// ----------------
// let a = 5;
// let b = 7;
// let c = 8;
// let result = a < b > c;
// console.log(result);
// let i = 4;
// for (let j = 0; i < 10; i++) {
//     if (j === 1 || i === 6) {
//         continue;
//     } else {
//         console.log(i, j);
//         if (i === 7) {
//             break;
//         }
//     }
// }
// // -------------------
// let i = 0;
// for (i; i < 5; i++) {
//     console.log(i);
// }
// ------------------
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// -------------------
// const dishes = ['puri', 'sabji', 'aam', 'kela'];
// for (i = 0; i < dishes.length; i++) {
//     console.log(dishes[i])
// }
// dishes.forEach((item) => {
//     console.log(item)
// })
// -------------------
// FOREACH LOOP FOR ARRAY
// const numbers = [1, 2, 3, 4, 5, 6]
// const squaredNumbers = [];
// numbers.forEach(function (number) {
//     squaredNumbers.push(number * number);
// });
// console.log(squaredNumbers);
// --------------------
// FOR IN LOOP FOR OBJECT
// const person = {
//     name: 'John Doe',
//     age: 30,
//     occupation: 'Engineer',
// };
// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key}: ${person[key]}`);
//     }
// }

// ------------------------------------------------------------------------//

// let sec = 1;
// function task() {
//     console.log(`john after ${sec} second`)
//     sec++;
//     if (sec === 6) {
//         clearInterval(id);
//     }
// }
// let id = setInterval(task, 1000);
// -----------------
// let person = {
//     name: 'john',
//     age: 25,
// };
// function greet(person) {
//     person.name = `Mr ${person.name}`;
//     return `Welcome ${person.name}`;
// }
// console.log(greet(person));
// console.log(person.name);
// -----------------
// HIGH ORDER FUNC
// function performOperation(num1, num2, operationCallback) {
//     return operationCallback(num1, num2);
// }
// function add(a, b) {
//     return a + b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// console.log(performOperation(5, 3, add));      // Output: 8 (5 + 3)
// console.log(performOperation(5, 3, multiply)); // Output: 15 (5 * 3)
// console.log("divya")
// ---------------
// HIGH ORDER FUNC
// function createGreetingGenerator(greeting) {
//     return function (name) {
//         return `${greeting}, ${name}!`;
//     };
// }

// const sayHello = createGreetingGenerator('Hello');
// console.log(sayHello('John')); // Output: "Hello, John!"
// const sayHi = createGreetingGenerator('Hi');
// console.log(sayHi('Alice'));   // Output: "Hi, Alice!"
// console.log("divya")
// ------------------
// CALLBACK FUNCTION
// function fetchDataFromServer(callback) {
//     // Simulating an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(function () {
//         const data = [1, 2, 3, 4, 5];
//         callback(data);
//     }, 1000);
// }
// function processReceivedData(data) {
//     console.log("Data received:", data);
// }
// fetchDataFromServer(processReceivedData); // Callback function "processReceivedData" is passed as an argument.
// console.log("divya gaurav")
// -------------------
// CALLBACK FUNC
// function fetchDataFromServer(callback) {
//     // Simulate asynchronous data fetching from a server
//     setTimeout(function () {
//         const data = { message: "Hello, world!" };
//         callback(data); // Execute the callback function with the retrieved data
//     }, 1000);
// }
// function processData(data) {
//     console.log(data.message);
// }
// fetchDataFromServer(processData);
// console.log("gaurav")

// --------------------------------------------------------------------------//

// ARRAY REDUCE METHOD
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
// ----------------
// const values = [10, 23, 5, 45, 32];
// const max = values.reduce(
//     (accumulator, currentValue) => Math.max(accumulator, currentValue));
// console.log(max); // Output: 45
// -----------------
// ARRAY EVERY AND SOME METHOD
// const numbers = [2, 4, 6, 8];
// const allEven = numbers.every((num) => num % 2 === 1);
// console.log(allEven);
// ----------------
// const numbers = [1, 3, 5, 7, 8];
// const hasEven = numbers.some((num) => num % 2 === 0);
// console.log(hasEven);
// Output: true (At least one element is even)
// ----------------
// SORTING IN CASE OF NUMBER ELEMENT IN ARRAY
// const numbers = [5, 2, 9, 1, 5, 6];
// Sorting in ascending order using the compare function
// numbers.sort((a, b) => a - b);
// console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
// numbers.sort((a, b) => b - a);
// console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
// ----------------

// ---------------------------------------------------------//



//-------JS STRING ----------
// All string methods return a new value.
// They do not change the original variable.

//str.slice() in String
// let text = "Apple, Banana, Kiwi"; // space and comma dono consider hoga
// let part = text.slice(7);
// console.log(part);
// console.log(text);
// // If a parameter is negative,position is counted from the end of the string:
// let part2 = text.slice(-7);
// console.log(part2);

//str.substring()
// let str = "AppleBananaKiwi";
// let part = str.substring(7, 13);// ei is exclusive
// console.log(part);

//str.substr();
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// let str = "Apple, Banana ,Kiwi";
// let part = str.substr(7, 6);
// console.log(part);

//str.replace()
// The replace() method replaces a specified value
// with another value in a string:
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);

//str.toLowerCase()
//str.toUpperCase()
//str.concat()
// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2);
// console.log(text3);

// str.trim() && trimStart() && trimEnd()
// The trim() method removes whitespace from both sides of a string:
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);


// str.split()
// converting a String to an Array
// If you want to work with a string as an array, you can convert it to an array.
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray)
// ------------->
// let text = "my name is divya gaurav";
// const myArray = text.split(" ");
// console.log(myArray)

//str.indexOf();
// The indexOf() method returns the index (position) the first occurrence of a string in a string:
// let text = "Please locate where locate occurs!";
// let index = text.indexOf("locate");
// console.log(index);
// -------->
//str.lastIndexOf()
// let text = "Please locate where locate occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index);
// NOTE :- Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// Str.includes()
// The includes() method returns true if a string contains a specified value.
// let text = "Hello world, welcome to the universe.";
// let res = text.includes("world");
// console.log(res);
// ----------->
// POPUP Message
// alert()
// prompt()
// confirm()

// alert('dfdf');

// let respond = confirm('are you fine ?')
// console.log(respond);

// let age = prompt('Enter Your age');
// console.log(age);

// ----------->
// js is dynamic type language this means same variable can holds
// diffrent datatype(number , string , array , object)

// NOTE :- JS evaluates expression from Left To Right
// let x  = 16+4+"volvo";
// let y = "volvo" + 16+4;
// console.log(x)
// console.log(y)

// -----------------------------------------------------------------------------//
// FUNCTION
// function sum(a , b , c){
//     console.log(a, b, c)
//     return a+b+c;
// }
// console.log(sum(3, 5)) //5+undefined = NaN

// ----------------->
// let nam = 'global';
// function scpoeDemo(){
//    nam = "divya"
//     console.log(nam);
// }
// scpoeDemo()
// console.log(nam)
// -------------->
// let nam = 'global';
// function scpoeDemo(){
//   let nam = "divya"
//     console.log(nam);
// }
// scpoeDemo()
// console.log(nam)
// ------------>
// function scope
// function outer(){
//     var outerVar = 10;
//     function inner(){
//         console.log(outerVar)
//     }
//     inner()
// }
// outer();
// inner()
// -------->
// console.log(factorial(5))
// console.log(factorial)
// var factorial = function (n){
//     var ans = 1;
//     for(var i=1; i<=n; i++){
//         ans*=i;
//     }
//     return ans;
// }
// ------------------------------------------------------------------------//
// Can arrow function be hoisted?
// Arrow functions are not hoisted as they are also function
// expressions where the function is assigned as a value to the variable.
// ------------->
// function call Inside function
// let combineStr = '';
// function a(){
//     combineStr = 'inside a'
//     function b(){
//         combineStr = combineStr + ' inside b'
//     }
//     b()
// }
// a();
// console.log(combineStr);
// ------------->
// var nam = 'global';
// function outer(){
//     var nam = 'outer';
//     var outerVar = 10;
//     function inner(){
//         var nam = 'inner'
//         var innerVar = 100;
//         console.log(nam , outerVar);
//     }
//     inner();
//     console.log(nam)
// }
// outer();
// console.log(nam);

// -------------->
// const arr = [2,3,4,5]
// arr.splice(11, 1 , 999)
// console.log(arr);
// --------->
// var color = ['red', 'blue', 'orange' , 'violet'];
// var removed = color.splice(2);
// console.log(removed)
// console.log(color)
// ------------->
// delete keyword used in object
// var student = {
//     'name' : 'dg',
//     'age' : 25
// }
// console.log(student)
// delete student.age;
// console.log(student)

// ----------------------------------------------------------------------//

//-------Destructuring of array-----
// const numbers = [1, 2, 3, 4, 5];
// // Destructuring assignment
// const [first, second, ...rest] = numbers;
// console.log(first);  // Output: 1
// console.log(second); // Output: 2
// console.log(rest);   // Output: [3, 4, 5]
// //-------Destructuring of object----
// const person = {
//     name: 'John Doe',
//     age: 30,
//     profession: 'Engineer'
//   };
//   // Destructuring assignment
//   const { name, age, profession } = person;
  
//   console.log(name);       // Output: John Doe
//   console.log(age);        // Output: 30
//   console.log(profession); // Output: Engineer

// -----------------------------------------------------//

// // -----------------------------------
// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;

//   console.log(jonas[i], typeof jonas[i]);
// }
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }
// // -----------------
// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

//-------------------------------------------------------------

// -------------------AJAX--------------//

// const xhr = new XMLHttpRequest();
// const url = "https://jsonplaceholder.typicode.com/users"; // Replace with the actual API endpoint
// console.log(XMLHttpRequest.DONE)
// xhr.open("GET", url, false);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//             const responseData = JSON.parse(xhr.responseText);
//             console.log(responseData); // Process the received data here
//         } else {
//             console.error("Error occurred while fetching data.");
//         }
//     }
// };
// xhr.send();
// console.log("asyncronous operation");

//=======================THE END=========================//

  



  


  
  

  
  




  
  