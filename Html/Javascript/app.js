// console.log("Hello world");

// let x = 12;
// x = "Remzi";
// x = true;

// var userName = "Admin";

// console.log(x);
// console.log(userName);

// console.log(12 + 12);

// console.log(12 + "12");
// console.log(12 - "10");

// const connection_string = "asdlkjkasikldjqweiojdoiw";

// console.log(connection_string);

// const hasDriverLicense = true;

// if (hasDriverLicense) {
//   console.log("You have dirver license");
// }

// let password = "123123";

// if (password == "12345") {
//   console.log("Passsword is correct");
// } else {
//   console.log("Password is incorrect");
// }

// if ("12" === 12) {
//   console.log("12 is equal to 12");
// }

// let users = ["Remzi", "john", "Walter", "Jamie"];

// console.log(users[2]);

//Array methods
//Arrayin sonuna element daxil edir
// users.push("Tyrion");
//Sonundan element silir
// users.pop();
//Evvelinden element silir
// users.shift();
// Evveline deyer daxil etmek üçün
// users.unshift("Leman");
// console.log(users.includes("Jessie"));
// console.log(users.indexOf("Walter"));
// console.log(users.)

// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(numbers);

// for (let index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

// // numbers.forEach();

// function SumTwoNumber(a, b) {
//   return a + b;
// }

// function AddNewElementToUsers(user) {
//   users.push(user);
//   console.log(users);
// }

// AddNewElementToUsers("Tywin");

// const student = {
//   firstName: "Remzi",
//   lastName: "Balakishiyev",
//   age: 23,
//   groups: [
//     {
//       id: 1,
//       name: "Backend",
//     },
//     {
//       id: 2,
//       name: "Frontend",
//     },
//     {
//       id: 3,
//       name: "Full Stack",
//     },
//   ],
// };

// console.log(student.groups);

// for (let index = 0; index < student.groups.length; index++) {
//   console.log(student.groups[index].name);
// }

// const students = [
//   {
//     firstName: "Remzi",
//     lastName: "Balakishiyev",
//     age: 23,
//     groups: [
//       {
//         id: 1,
//         name: "Backend",
//       },
//       {
//         id: 2,
//         name: "Frontend",
//       },
//       {
//         id: 3,
//         name: "Full Stack",
//       },
//     ],
//   },
//   {
//     firstName: "Remzi",
//     lastName: "Balakishiyev",
//     age: 23,
//     groups: [
//       {
//         id: 1,
//         name: "Backend",
//       },
//       {
//         id: 2,
//         name: "Frontend",
//       },
//       {
//         id: 3,
//         name: "Full Stack",
//       },
//     ],
//   },
// ];
/*
class Student {
?    public string FirstName {get; set;}
?    public string LastName {get; set;}
?    public int Age {get; set;}
?    public ICollection<Group> Groups {get; set;}

}

class Group {
?    public int Id {get; set;}  
?    public string Name {get; set;}  

}




*/

// const fruits1 = ['apple', 'banana'];
// const fruits2 = ['cherry', 'date']; bu iki array birləşdirin

// const fruits1 = ["apple", "banana"];
// const fruits2 = ["cherry", "date"];

// const allFruits = [];

// for (let index = 0; index < fruits2.length; index++) {
//   allFruits.push(fruits1[index]);
// }

// console.log(allFruits);

// for (let index = 0; index < fruits2.length; index++) {
//   allFruits.push(fruits2[index]);
// }
// console.log(allFruits);

// console.log(student);

// console.log(SumTwoNumber(12, 13));

// age array-dən evenAge  array-i düzəldin yəni ages içində cütləri seçib evenAge-i yaradan kod yazın . evenAge = [22,24,20,26,24] olsun sonda

// const ages = [18, 22, 23, 24, 25, 26, 27];

// const evenAge = [];

// for (let index = 0; index < ages.length; index++) {
//   if (ages[index] % 2 == 0) {
//     evenAge.push(ages[index]);
//   }
// }

// console.log(evenAge);

// DOM

let mainHead = document.querySelector("#main-head");

console.dir(mainHead);
console.log(mainHead.innerHTML);
mainHead.style.color = "blue";
mainHead.innerHTML = "Remzi Balakishiyev";
let colOne = document.querySelector("#col-1");
// colOne.classList.remove("bg-danger");
colOne.classList.add("bg-gradient");

// const contentText = document.querySelector("#content-text");

// let userName = "Remzi Balakisyev";
// contentText.innerHTML = `
//     <span class="alert alert-success" >${userName}</span>
// `;

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let tbody = document.querySelector("#tbody");
let btnSubmit = document.querySelector("#btn-submit");

btnSubmit.addEventListener("click", function () {
  console.log(email.value);
  console.log(password.value);
  tbody.innerHTML += `
                    <tr>
                        <td>${email.value}</td>
                        <td>${password.value}}</td>
                    </tr>
  `;
});
