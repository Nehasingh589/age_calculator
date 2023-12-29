"use strict";

const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
    debugger; // This will pause execution and open the debugger
  const birthdayValue = birthdayE1.value;
  console.log(birthdayValue);
  if (birthdayValue === "") {
    alert("Please Enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old `;
    console.log(age);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthDate = new Date(birthdayValue);
  console.log(currentDate.getFullYear());
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;

  //   console.log(age);
}
btnE1.addEventListener("click", calculateAge);