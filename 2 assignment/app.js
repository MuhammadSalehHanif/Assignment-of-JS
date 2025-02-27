// // // var name1=prompt('enter your name')
// // // alert('welcome '+name1)
// // var value=+prompt('enter your num for mulitiplication table')
// // var value1=value*1
// // var value2=value*2
// // var value3=value*3
// // var value4=value*4
// // var value5=value*5
// // var value6=value*6
// // var value7=value*7
// // var value8=value*8
// // var value9=value*9
// // var value10=value*10

// // document.write(

// //     `
// //     <center>
// //     <h1> THE TABLE OF ${value}</h1> <br>
// //     ${value} x 1 = ${value1}  <br>
// //     ${value} x 2 = ${value2}  <br>
// //     ${value} x 3 = ${value3}  <br>
// //     ${value} x 4 = ${value4}  <br>
// //     ${value} x 5 = ${value5}  <br>
// //     ${value} x 6 = ${value6}  <br>
// //     ${value} x 7 = ${value7}  <br>
// //     ${value} x 8 = ${value8}  <br>
// //     ${value} x 9 = ${value9}  <br>
// //     ${value} x 10 = ${value10}  <br>
// // </center>

    
// //     `
// // )




// // var city=prompt('Enter your city name')
// // if(city == "karachi"){alert('welcome to city of light')}
// // else if(city =="lahore"){alert('welcome to city of mughal')}
// // else if(city == "islamabad"){alert('welcome to capital of pakistan')}
// // else{alert("welcome to city of pakistan")}



// // var mf=prompt("enter your gender")
// // if(mf =="male"){alert("hello SIR")}
// // else{alert("hello MAM")}




// // var signal =prompt("green", "yellow", "red");

// // if (signal == "red") {
// //     alert("Danger");
// // }

// // else if (signal == "yellow") {
// //     alert("Stop");
// // }

// // else {
// //     alert("Cross the road");
// // }


// // var age=+prompt("what your age")
// // var maxage='70'
// // if(age <=maxage){document.write("Your are welcome")}
// // else{document.write("allah apki magfrat farmaye")}

// // var fuel=+prompt("enter your car fuel liter")
// // if(fuel <=0.25){document.write("please enter refill fuel in your car")}
// // else{document.write("Happy journey")}


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }



// var name1=prompt("what your name")
// var totalmark=300;
// var obtained=prompt('enter your obtained marks')
// var perc=(obtained/totalmark)*100
// var grade;
// var remarks;
// if(perc >=80){grade="A-ONE "
//     remarks="Excellent"
// }
// else if(perc >=70){grade="A"
//     remarks='Good'
// }
// else if(perc >=60){grade="B"
//     remarks="You need to improve"
// }
// else if(perc <=60){grade="Fail"
//     remarks="Sorry Better luck next time"
// }
// document.write(`
//     <h1></h1><br>
//     name : ${name1}<br>
//     Total marks = ${totalmark}<br>
//     Obtained marks = ${obtained}<br>
//     Percentage : ${perc}<br>
//     Grade : ${grade}<br>
//     Remarks : ${remarks}<br> 
    
//     `)


// var item1=prompt("Name of item1", "tshirt")
// var item2=prompt("Name of item 2" , "pants")
// var price1= 500
// var price2=800
// var quantity1=+prompt("please enter quantity of item 1")
// var quantity2=+prompt("please enter quantity of item 2")
// var shipping=250
// var total=(price1*quantity1)+(price2*quantity2) 
// var discount;




// if (total >= 1000) {  
//          discount = (total * 0.10)-total; // 10% discount  
//      }  
    
//      else if (total >= 2000) {  
//          discount = (total * 0.20)-total // 20% discount  
//      }  
//      else if (total >= 3000) {  
//          discount = total * 0.30;  //30% discount  
//      }  
//      else if (total >= 4000) {  
//          discount = total * 0.40; // 40% discount  
//      }  
//      else if (total >= 5000) {  
//          discount = total * 0.50; // 50% discount  
//      }  
    
//      else{
//          discount = total * 0;
//      }

// document.write(`
//     <table border=''>
//     <tr>
//     <th>${item1}</th>
//     <th>price of ${item1} ${price1}</th>
//     <th>quantitiy of  ${item1} ${quantity1}</th>

//     </tr>

//     <tr>
//     <th>${item2}</th>
//     <th>price of ${item2}${price2}</th>
//     <th>quantitiy of  ${item2} ${quantity2}</th>

//     </tr>
    
//      <tr>
//     <th>shipping charges</th>
//     <th>${shipping}</th>
//     </tr>

//      <tr>
//     <th> Total </th>
//     <th> ${total} </th>
//     </tr>

//     <tr>
//     <th> discont</th>
//     <th>${discount}</th>
//     </tr>
//     </table>
    
//     `)

// var guest=+prompt("enter your number")
//     if(guest==5){document.write("bingo")}
//     else if (guest>= 4){document.write("you are so close")}
//     else{document.write("better luck next time")}
// var name1="tigers"
// var name2="wolfs"
// var team1=prompt("enter score")
// if (team1 >= 200){alert("tigers are won "+"\n wolfs are lost")}
// else if (team1 <= 200){alert("wolfs are won "+"\n tigers are lost")}



// var name1="tigers"
// var name2=92
// var e=true
// document.write(name1 +"   is a "+typeof(name1)+"<br>")
// document.write(name2 +" is a "+typeof(name2)+"<br>")
// document.write(e +"is a "+typeof(e)+"<br>")





// var evenodd=+prompt("enter your number")
// if (evenodd==1){alert(evenodd+"is odd")}
// else if (evenodd==3){alert(evenodd+"is odd")}
// else if (evenodd==5){alert(evenodd+"is odd")}
// else if (evenodd==7){alert(evenodd+"is odd")}
// else if (evenodd==9){alert(evenodd+"is odd")}
// else if (evenodd==2){alert(evenodd+"is even")}
// else if (evenodd==4){alert(evenodd+"is even")}
// else if (evenodd==6){alert(evenodd+"is even")}
// else if (evenodd==8){alert(evenodd+"is even")}
// else if (evenodd==10){alert(evenodd+"is even")}


// var num1 = +prompt("enter num1");
// var operat =prompt("enter operation value (* / + - %)");
// var num2 = +prompt("enter num2");
// var result;

// if(operat === "*"){
//     result = num1 * num2;
// }else if(operat == "/"){
//     result = num1 / num2;
// }else if(operat === "+"){
//     result = num1 + num2;
// }else if(operat === "-"){
//     result = num1 - num2;
// }else if(operat ==="%"){
//     result = num1 % num2;
// }else{
//    alert(${operat} invalid value);
// }

// alert(${num1}${operat}${num2}result is "${result}");



// var day=prompt("enter what day")
// if(day== "monday"){alert("this is week")}
// else if(day=="tuesday"){alert("this is week")}
// else if(day=="wednesday"){alert("this is week")}
// else if(day=="thurday"){alert("this is week")}
// else if(day=="friday"){alert("this is week")}
// else if(day=="tuesday"){alert("this is week")}
// else if(day=="sunday"){alert("yah its holiday")}
// else {alert("this is not day")}




// var num=+prompt('what your result number')       
// if (50 <= num){document.write("you are passad ")}
// else{document.write("try again")}

//  var num=+prompt('enter your number')
//  var noun=prompt('enter your noun')
//  alert(num+noun)


//chapter12 13


// var num=+prompt("enter your num")
// if( num *= 3){document.write(num+"divided by three")}
// else{document.write(num+"not divivded by three")}


// var evenodd=+prompt("enter your number")
// if (evenodd==1){alert(evenodd+"is odd")}
// else if (evenodd==3){alert(evenodd+"is odd")}
// else if (evenodd==5){alert(evenodd+"is odd")}
// else if (evenodd==7){alert(evenodd+"is odd")}
// else if (evenodd==9){alert(evenodd+"is odd")}
// else if (evenodd==2){alert(evenodd+"is even")}
// else if (evenodd==4){alert(evenodd+"is even")}
// else if (evenodd==6){alert(evenodd+"is even")}
// else if (evenodd==8){alert(evenodd+"is even")}
// else if (evenodd==10){alert(evenodd+"is even")}
  



// var age=+prompt('what your age')
// if(age >= 18){document.write("old enough")}
// else{document.write('Too young')}



// var name1=prompt("what your name")
// document.write("hello "+name1)


// var num=+prompt("enter your num")
// if( num *= 3){document.write(num+"divided by three")}
// else{document.write(num+"not divivded by three")}


// // Function to check the type of character
// function checkCharacterType(char) {
//     if (char.length !== 1) {
//         return "Please provide a single character.";
//     }

//     const asciiCode = char.charCodeAt(0); // Get the ASCII code of the character

//     if (asciiCode >= 48 && asciiCode <= 57) { // ASCII range for numbers (0-9)
//         return "The input is a number.";
//     } else if (asciiCode >= 65 && asciiCode <= 90) { // ASCII range for uppercase letters (A-Z)
//         return "The input is an uppercase letter.";
//     } else if (asciiCode >= 97 && asciiCode <= 122) { // ASCII range for lowercase letters (a-z)
//         return "The input is a lowercase letter.";
//     } else {
//         return "The input is neither a number nor an alphabet letter.";
//     }
// }

// // Input from the user
// const character = prompt("Enter a single character:");

// // Check the type of the character and display the result
// const result = checkCharacterType(character);
// alert(result);


// var year = +prompt("Enter the Year")

// if (year % 4 === 0) {
//     document.write("its a leap year")
// }
// else{
//     document.write("its not a leap year")
// }  




// var password="amirarif"
// var password1=prompt("enter your password")
// if(password==password1){alert("your password is correct")}
// else{alert("incorrect password")}


// var name1=prompt("what your name")
// if(name1=="fahad"){document.write('hello fahad')}
// else{document.write("you are not fahad")}

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }
// document.write(greeting)

// var num1=+prompt("enter your num")
// var num2=+prompt("enter your num")


// if (num1 > num2) {
//    document.write(`The larger number is: ${num1}`);
// } else if (num2 > num1) {
//    document.write(`The larger number is: ${num2}`);
// } else {
//    document.write("Both numbers are equal.");
// }




// var num=+prompt("enter your number")
// if(num < 1){document.write(num+" num is positive")}
// else if(-1 >num){document.write(num+"this is negative number")}
// else if(num ==0){document.write("this num is zero")}
// var num=1
// var string="hello"
// var a=true
// var d;
// document.write("this is type of "+typeof(num)+
// "<br> this is type of "+typeof(string)+
// "<br> this is type of "+typeof(a)+
// "<br> this is type of "+typeof(d)



// )




// if(10 !==8){document.write(true)}