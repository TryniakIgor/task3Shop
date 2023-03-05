//2.1
alert('Hello, world!');
 
//2.4
let userName = 'John';
let admin = userName;
alert(admin);

let planetName, visitorsCount

/*
2.5
What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); -- hello 1

alert( `hello ${"name"}` ); -- hello name

alert( `hello ${name}` ); -- hello Ilya
*/

//2.6
let visitor = prompt('What is your name', ' ');
//let age = prompt('How old are you?', 100);
alert(`Hello, ${visitor}!`);

//2.8
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b);

/*
2.9
5 > 4 → true
"apple" > "pineapple" -- false
"2" > "12" → true
undefined == null -- true
undefined === null -- false
null == "\n0\n" -- false
null === +"\n0\n" -- false
*/

//2.10
const input = prompt("Input number", +"");
if (input == 0) {
    alert(0);
} else if(input > 0){
   alert(1); 
} else if (input < 0) {
    alert(-1); 
}

let result = (a + b < 4)?'Below':'Over';
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : '';
  
//2.11
if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

let userName1 = prompt("Enter your name", '');
if (userName1 === 'Admin') {

  let pass = prompt('Enter your password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName1 === '' || userName1 === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

//2.12
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

next:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue next;
  }

  alert( i );
}

//2.13
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

let y = +prompt('y?', '');

switch (y) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

//2.15
function checkAge(age) {
  return (age > 18) ?? confirm('Did parents allow you?');
}

function min(a, b) {
  if (a < b) {
    return a;
  } else if(a > b) {
    return b;
    }
    else return confirm(" They are equal")
}

function pow(x1, n1) {
  let result = x1;

  for (let i = 1; i < n1; i++) {
    result *= x1;
  }

  return result;
}

let x1 = prompt("x?", '');
let n1 = prompt("n?", '');

if (n1 < 1) {
  alert(`Power ${n1} is not supported, use a positive integer`);
} else {
  alert( pow(x1, n1) );
}

//2.17
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);