  // ----------- Chapter 9-11 USER INPUT & CONDITIONAL STATEMENT ----------

  "QUESTION NO:01"
  // 1.Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
 //  “Welcome to city of lights”
  
 //  let city = prompt("Enter your city name").toLowerCase()
 //  if(city === "karachi"){
 //      alert("Welcome to city of lights")
 //  }
  
  
         "QUESTION NO:02"
  // 2. Write a program to take “gender” as input from user. If the user is male, give the message:Good Morning Sir. 
  // If the user is female, give the message: Good Morning Ma’am. 
  
 //  let gender = prompt("Enter  your gender").toLowerCase()
 //  if(gender === "male"){
 //      alert("Good Morning Sir")
 //  }
 //  else if(gender === "female"){
 //      alert("Good Morning Ma’am")
 //  }
 //  else{
 //      alert("Invalid input! Please enter 'male' or 'female'")
 //  }
  
  
         "QUESTION NO:03"
  // 3.Write a program to take input color of road traffic signal from the user & show the message according to this table:
  
 //  let color = prompt("Enter the color of road traffic signal").toLowerCase()
 //  if (color === "red"){
 //      alert("Must Stop")
 //  }
 //  else if(color === "yellow"){
 //      alert("Ready to move")
 //  }
 //  else if(color === "green"){
 //      alert("Move now")
 //  }
 //  else{
 //      alert("Invalid color! Please enter Red, Yellow, or Green");
 //  }
  
  
         "QUESTION NO:04"
  // 4.Write a program to take input remaining fuel in car (in litres) from user.
  // If the current fuel is less than 0.25litres,
  // show the message “Please refill the fuel in your car”
  
 //  let fuel = +prompt("Enter your remaining fuel in car in litres: ");
 //  if(fuel<0.25){
 //      alert("Please refill the fuel in your car")
 //  }
  
  
         "QUESTION NO:05"
  // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
  
  // Part "A"
 //  let a = 4; 
 //  if (++a === 5){ 
 //      alert("given condition for variable a is true");
 //      }
  
  // Part "B"
 //  let b = 82;
 //  if (b++ === 83){
 //      alert("given condition for variable b is true");
 //      }
  
  // Part "C"
 //  let c = 12;
 //  if (c++ === 13){
 //      alert("condition 1 is true");
 //      }
  
 //  if (c === 13){ 
 //      alert("condition 2 is true"); 
 //      }
  
 //  if (++c < 14){ 
 //      alert("condition 3 is true"); 
 //      } 
  
 //  if(c === 14){ 
 //      alert("condition 4 is true"); 
 //      }
  
  // Part "D"
 //  let materialCost = 20000; 
 //  let laborCost = 2000; 
 //  let totalCost = materialCost + laborCost; 
 //  if (totalCost === laborCost + materialCost){ 
 //      alert("The cost equals"); 
 //      }
  
  // Part "E"
 //  if (true){ 
 //      alert("True"); 
 //      } 
  
 //  if (false){ 
 //      alert("False"); 
 //      }
  
  // Part "F"
 //  if("car" < "cat"){ 
 //      alert("car is smaller than cat"); 
 //      }
  
  
  
         "QUESTION NO:06"
  // 6. Write a program to take input the marks obtained in three subjects & total marks.
  // Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
  
 //  let obtainedMarks = +prompt("Enter the marks obtained in three subjects")
 //  let totalMarks =  +prompt(" Enter Total Marks")
 //  let percentage = (obtainedMarks/totalMarks)*100
 //  percentage = percentage.toFixed(2) 
  
 //  document.write("<h1>"+"Marksheet"+"</h1>"+"<br>");
 //  document.write("Obtained marks: "+obtainedMarks+"<br>");
 //  document.write("Total marks: "+totalMarks+"<br>");
 //  document.write("Percentage: "+percentage+"<br>");
  
 //  let grade;
 //  let remarks;
 //  if(percentage>=80){
 //      grade="A-one";
 //      remarks="Excellent";
 //  }
 //  else if(percentage>=70){
 //      grade="A";
 //      remarks="Good";
 //  }
 //  else if(percentage>=60){
 //      grade="B";
 //      remarks="You need to improve";
 //  }
 //  else if(percentage<60){
 //      grade="Fail";
 //      remarks="Sorry";
 //  }
 //  else{
 //      document.write("Invalid Input" + "<br>")
 //  }
 //  document.write("Grade: "+grade+"<br>");
 //  document.write("Remarks: "+remarks+"<br>");
  
         "QUESTION NO:07"
  // 7. Guess game:
  // Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
  
  // a. If user guesses the same number, show “Bingo! Correct answer”.
 //  let secretnum = 5
 //  let num = +prompt("Enter a number")
 //  if (secretnum === num){
 //         alert("Bingo! Correct answer") 
 //  }
  
  // b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
 //  else if(++secretnum === num){
 //          alert("Close enough to the correct answer")
 //  }
 //  else{
 //        alert("Sorry wrong guess")  
 //  }
  
  
         "QUESTION NO:08"
  // 8.Write a program to check whether the given number is divisible by 3.
  // Show the message to the user if the number is divisible by 3.
  
 //  let num = +prompt("Enter number to check number is divisible by 3 or not");
 //  if(num % 3 === 0){
 //      alert(num+" is divisible by 3")
 //  }
 //  else{
 //      alert(num+" is not  divisible by 3")
 //  }
  
  
         "QUESTION NO:09"
  // 9. Write a program that checks whether the given input is an even number or an odd number.
  
 //  let num = +prompt("Enter number to check number is  an even number or an odd number");
 //  if(num % 2 === 0){
 //      alert(num+" is an even number ")
 //  }
 //  else{
 //      alert(num+" is an odd number ")
 //  }
  
  
         "QUESTION NO:10"
  // 10.Write a program that takes temperature as input and shows a message based on following criteria
  // a. T > 40 then “It is too hot outside.”
  // b. T > 30 then “The Weather today is Normal.”
  // c. T > 20 then “Today’s Weather is cool.”
  // d. T > 10 then “OMG! Today’s weather is so Cool.”
  
 //  let temp = +prompt("Enter temerature")
 //  if(temp>40){
 //          alert("It is too hot outside")
 //  }
 //  else if(temp>30){
 //          alert("The Weather today is Normal")
 //  }
 //  else if(temp>20){
 //          alert("Today’s Weather is cool")
 //  }
 //  else if(temp>10){
 //          alert("OMG! Today’s weather is so Cool")
 //  }
  
  
         "QUESTION NO:11"
  // 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
  // a. First number
  // b. Second number
  // c. Operation (+, -, *, /, %)
  // Compute & show the calculated result to user.
  
//   let firstNumber=+prompt("Enter first Number");
//   let secondNumber=+prompt("Enter second Number");
//   let oper=prompt("Choose your operation: \n(+, - , * , / ")
//   if(oper==="+"){
//       alert(firstNumber+secondNumber)
//   }
//   else if(oper==="-"){
//       alert(firstNumber-secondNumber)
//   }
//   else if(oper==="*"){
//       alert(firstNumber*secondNumber)
//   }
//   else if(oper==="/"){
//       alert(firstNumber/secondNumber)
//   }
//   else{
//       alert(firstNumber%secondNumber)
//   }
  
  
                 
            // ----------- End of Chapter 9-11 ----------