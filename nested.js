//function add(a, b) {
  //  function sum() {
   //     return a + b;
   // }
    //return sum();
//}
// console.log(add(15, 40));

// function calculation(num1, num2) {
  //  function add() {
    //    return num1 + num2;
     //   }
     //   function subtract() {
     //       return num1 - num2;
    //    }
    //    function multiply() {
     //       return num1 * num2;
    //    }
     //   function divide() {
   //         return num1 / num2;
   //     }
   //     return add() + " " + subtract() + " " + multiply() + " " + divide();
   // }
    
    //console.log(calculation(15, 40));

    //anonymous function has no name and is often used as a callback function or assigned to a variable.

   //  const greetings = function(name) {
     //   console.log(`Hello ${name}!`);          
  //  }; 

   // greetings("Jon");

    //arrow function is a concise syntax for writing functions in JavaScript. 
    // It is often used for shorter functions and does not have its own 'this' context.

  //  const calculation = (a,b) => {  // a and b are variables/ parameters assigned to a function
   //     return a + b;               // arguments are the actual values passed to the function when it is called. In this case, 15 and 40 are the arguments passed to the calculation function.
   // }
    //console.log(calculation(15, 40));
     
    //converting calculation function to an arrow function

    const calculation2 = (a,b) => ({add: a + b, subtract: a - b, multiply: a * b, divide: a / b});
    console.log(calculation2(20, 10));

    
        

    //const addition = (x,y) => x + y;
   //console.log(addition(15, 40));
    
   function signUp(username, password) {
    console.log(`Username: ${username}, Password: ${password}`);
   }
    signUp("Gloria", "password123");
    const users = [
        { username: "Gloria", password: "password123" },
        { username: "John", password: "password456" },
        { username: "Jane", password: "password789" }
    ]

    function signIn(username, password) {
        console.log(`Username: ${username}, Password: ${password}`);
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            console.log("Sign in successful!");
        } else {
            console.log("Invalid username or password.");
        }   
    }
    signIn("Gloria", "password123");