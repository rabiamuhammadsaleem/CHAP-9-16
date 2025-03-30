  // ----------- Chapter 14-16 Arrays ----------

        "QUESTION NO:01"
// 1. Declare an empty array using JS literal notation to store student names in future. 

// let studentName1 = []


        "QUESTION NO:02"
// 2. Declare an empty array using JS object notation to store student names in future.

// let studentNames2 = new Array();


        "QUESTION NO:03"
// 3. Declare and initialize a strings array.

// let fruits = ["banana","mango","orange","grapes","pineapple"]
// document.write("String Array: " + fruits + "<br>" + "<br>" + "<br>");


        "QUESTION NO:04"
// 4. Declare and initialize a numbers array.

// let num = [10,20,30,40,50]
// document.write("Number Array: " + num + "<br>" + "<br>" + "<br>");


        "QUESTION NO:05"
// 5. Declare and initialize a boolean array.

// let boolean = [true,false,true,false]
// document.write("Boolean Array: " + boolean + "<br>" + "<br>" + "<br>");


        "QUESTION NO:06"  
// 6. Declare and initialize a mixed array.

// let mixed = ["Asma","red","strawberry",23,false]
// document.write("Mixed Array: " + mixed + "<br>" + "<br>" + "<br>");


        "QUESTION NO:07"
// 7. Declare and Initialize an array and store available education qualifications in Pakistan
// (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
// let count = 0;
// let i = 0;
// document.write("Qualifications:" + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>");
// document.write(++count + ") " + qualifications[i++] + "<br>" + "<br>" + "<br>");


        "QUESTION NO:08"
// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

// let studentnames = ["Michael","John","Tony"]
// let score = [320,230,480] 
// let totalMarks = 500
// let percentage1 = (score[0]/totalMarks)*100
// let percentage2 = (score[1]/totalMarks)*100
// let percentage3 = (score[2]/totalMarks)*100
// document.write("Score of "+studentnames[0]+" is: "+score[0]+". Percentage: "+percentage1+"%"+"<br>")
// document.write("Score of "+studentnames[1]+" is: "+score[1]+". Percentage: "+percentage2+"%"+"<br>")
// document.write("Score of "+studentnames[2]+" is: "+score[2]+". Percentage: "+percentage3+"%"+"<br>")



        "QUESTION NO:09"
// 9. Initialize an array with color names.
// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Display the array elements in your browser.
// document.write("<h1>Initial Colors:</h1> " + colors.join(", ") + "<br>");

// a.Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
// let addStart = prompt("Enter a color to add at the beginning:")
// let formattedInput1 = addStart.charAt(0).toUpperCase() + addStart.slice(1).toLowerCase();
// colors.unshift(formattedInput1);
// document.write("<h3>After Adding Color at the Beginning:</h3> " + colors.join(", ") + "<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.Display the updated array in your browser.
// let addEnd = prompt("Enter a color to add at the end:");
// let formattedInput2 = addEnd.charAt(0).toUpperCase() + addEnd.slice(1).toLowerCase();
// colors.push(formattedInput2);
// document.write("<h3>After Adding Color at the End:</h3> " + colors.join(", ") + "<br>");

// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// colors.unshift("Pink", "Orange");
// document.write("<h3>After Adding Two More Colors at the Beginning:</h3> " + colors.join(", ") + "<br>");

// d. Delete the first color in the array.Display the updated array in your browser.
// colors.shift();
// document.write("<h3>After Deleting the First Color:</h3> " + colors.join(", ") + "<br>");

// e. Delete the last color in the array.Display the updated array in your browser.
// colors.pop();
// document.write("<h3>After Deleting the Last Color:</h3> " + colors.join(", ") + "<br>");

// f. Ask the user at which index he/she wants to add a color & color name.Then add the color to desired position/index.Display the updated array in your browser.
// let indexAdd = +prompt("Enter the index where you want to add a color:");
// let colorName = prompt("Enter the color name:");
// let formattedInput3 = colorName.charAt(0).toUpperCase() + colorName.slice(1).toLowerCase();
// colors.splice(indexAdd, 0, formattedInput3);
// document.write("<h3>After Adding a Color at Index " + indexAdd + ":</h3> " + colors.join(", ") + "<br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.Then remove the same number of color(s) from user-defined position/index.Display the updated array in your browser.
// let indexDelete = +prompt("Enter the index from where you want to delete color(s):");
// let deleteCount = +prompt("Enter how many colors you want to delete:");
// colors.splice(indexDelete, deleteCount);
// document.write("<h3>After Deleting " + deleteCount + " Color(s) from Index " + indexDelete + ":</h3> " + colors.join(", ") + "<br>");


        "QUESTION NO:10"
// 10.Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

// let score=[320,230,480,120];
// document.write("Scores Of Student : "+score+"<br>")
// document.write(" Ordered Scores Of Student: "+score.sort()+"<br>")


        "QUESTION NO:11"
// 11.Write a program to initialize an array with city names.Copy 3 array elements from cities array to selected Cities array.

// let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write("<h3>Cities List:</h3>"+cities+"<br>")
// let selectcities = cities.slice(2,4)
// document.write("<h3>Selected cities List:</h3>"+selectcities+"<br>")


        "QUESTION NO:12"
// 12.Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];

// let array=["This","is","my","cat"];
// document.write("<h3>Array : </h3>"+array+"<br>");
// let string=array.join(' ');
// document.write("<h3>Strings : </h3>"+string+"<br>");


        "QUESTION NO:13"
// 13.Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// let devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices: "+"<br>", devices.join(",")+"<br>"+"<br>");
//  while(devices.length > 0) {
//     document.write("Out: "+"<br>", devices.shift()+"<br>"); 
// }


        "QUESTION NO:14"
// 14.Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)

// let devices = []
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices: "+"<br>", devices.join(",")+"<br>"+"<br>");
// while(devices.length>0){
//     document.write("Out:"+"<br>",devices.pop()+"<br>")
// }


        "QUESTION NO:15"
// 15.Write a program to store phone manufacturers (Apple Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your browser using document.write() method:

// let phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// for (let i = 0; i < phone.length; i++) {
//     document.write("<option>" + phone[i] + "</option>");
// }
// document.write("</select>");

 
              // ----------- End of Chapter 14-16 ----------