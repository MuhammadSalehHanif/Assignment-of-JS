// for (var i = 1; i <= 5; i++) {
//       document.write(i+") &nbsp hello <br>");
//      }
    
// for (var i =1;i <=5 ; i++){
//     document.write("hello world<br>")
// }

// for (var i =1;i <=10 ; i++){
//         document.write(i+"<br>")
//      }


// var num=+prompt('enter your name')
// for(var i=1; i<=10; i++){
//     document.write(`${num} x ${i} = ${num*i} <br> `)
// }


// var fruit=["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// for(var i=0; i <fruit.length ; i++)
// {
//     document.write(fruit[i]+"<br>")
// }


// var fruit=["apple", "mango", "banana", "pineapple"]

// document.write()

// for(var i=0; i <fruit.length ; i++)
// {
//     document.write(fruit[i]+"<br> ")
// }

// document.write(`<br><br>`)
// for(var i=0; i<fruit.length; i++){
//     document.write(`element at index ${i} is `+ fruit[i]+"<br>")
// }





// var user=+prompt("how many item you have enter in number")
// var user1=prompt("enter value of index 0")
// var user2=prompt("enter value of index 1")
// var user3=prompt("enter value of index 2")
// var user4=prompt("enter value of index 3")


// var arr=[]
// document.write(`number of item : ${user}
// //     <br> item <br>`)
// // arr.push(user,user1,user2,user3,user4)
// // for(var i=0; i<arr.length;i++){
// //     document.write(arr[i]+"<br>")
// // }

// document.write("counting<br>")
// for(var i=1 ; i<=15;i++){
//     document.write(i+",")
// }
// document.write("<br>reverse counting<br>")
// for(var i=15;i>=0;i--){
//     document.write(i+" , ")
// }

// document.write("<br>even<br>")
// for(var i=0 ; i<=15;i=i+2){
//     document.write(i+",")
// }
// document.write("<br>odd <br>")
// for(var i=1 ; i<=15;i=i+2){
//     document.write(i+",")

// }
// document.write("<br>series<br>")
// for(var i=2 ; i<=15;i=i+2){
//     document.write(i+"k ,")
// }

// for(var i=5 ; i<=100;i=i+5){
//     document.write(i+" ,")
// }

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// for(var i=0;i<students.length;i++){
//    document.write( `<table border="">
//     <tr>
//         <th>student</th>
//         <th>scores</th>

//     </tr>
//     <tr><td>${students[i]}</td><td>${scores[i]}</td></tr>
    

// </table>`)
// }


// // Define the array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Get user input
// var searchItem = prompt("Enter an item to search:")//.trim().toLowerCase();

// // Search in the array
// if (A <= searchItem) {
//    document.write(`Yes, ${searchItem} is available in the list.`);
// } else {
//    document.write(`Sorry, ${searchItem} is not in the list.`);
// }
   


// var array=[24,53,78,91,12]
// var largest=Math.max(...array)
// document.write('the largest number of array is '+largest)

// var array=[24,53,78,91,12]
// var smallest=Math.min(...array)
// document.write('<br>the smallest number of array is '+smallest)



// var array=[24,53,78,91,12]
// var largest=Math.max(...array)
// document.write('the largest number of array is '+largest)
// var smallest=Math.min(...array)
// document.write('<br>the smallest number of array is '+smallest)



// var scores = [12, 45, 3, 22, 34, 50];
// var de=[1,2,3,4,5,6]
// var user=+prompt(`enter your number`)
// var copy=scores.slice(user)

// if(user == de){
//     document.write(copy+"this is your number")

// }
// // Define the array
// const scores = [12, 45, 3, 22, 34, 50];

// // Get user input
// const stopValue = parseInt(prompt("Enter a stop value:"));

// // Find the index of the stop value
// const stopIndex = scores.indexOf(stopValue);

// // Print numbers up to the stop value
// if (stopIndex !== -1) {
//     console.log(`Numbers up to ${stopValue}:`, scores.slice(0, stopIndex + 1).join(", "));
// } else {
//     console.log("Stop value not found in the array.");
// }



// var array=[[1,2,3],[4,5,6]
// ,[7,8,9]]
// for(var i =0; i < array.length; i++){
//     for(var j = 0 < array[i].length; j++;){  
//         document.write(array[i][j])
//     }
// }


// var num=+prompt("enter your num")
 
//  for(var i=num;i>=0;i=i-0.5){
//      document.write(i+" , ")
//  }

for(var i=7; i>=1; i--){
    for(var j=1; j <= i; j++){
        document.write("*" + " ")
    }
    document.write("<br>")
}



for(var i=5; i>=1; i--){
   for(var j=1; j <= i; j++){
       document.write("*" + " ")
   }
   document.write("<br>")
}








for(var i=1; i<=5; i++){
    for(var j=1; j <= i; j++){
        document.write("*" + " ")
    }
    document.write("<br>")
}

for(var i=5;i>=1;i--){
for(var j=1;j<=i;j++){
   document.write("*"+" ")

}
document.write("<br>")
}


// for(var i=5; i<=1;i--){
//     for(var j=1; j<=i;j++){
//         document.write(j+"")
//     }
//     document.write("<br>")
// }