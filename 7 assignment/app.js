// var user=+prompt("enter any number")
// document.write(`<h2>user num = ${user}<br>
// round off value = ${Math.round(user)}<br>
// floor value = ${Math.floor(user)}<br>    
// ceil value = ${Math.ceil(user)}</h2>`)



// var negative=+prompt("enter any negative  number")
// document.write(`<h2>negative num = ${negative}<br>
// round off value = ${Math.round(negative)}<br>
// floor value = ${Math.floor(negative)}<br>
// ceil value = ${Math.ceil(negative)}</h2>`)


// var positive=+prompt("enter any positive floating number")
// document.write(`<h2>positive flaoting num = ${positive}<br>
// round off value = ${Math.round(positive)}<br>
// floor value = ${Math.floor(positive)}<br>
// ceil value = ${Math.ceil(positive)}</h2>`)


// var negativef=+prompt("enter any negative floating number")
// document.write(`<h2>negative flaoting num = ${negative}<br>
// round off value = ${Math.round(negative)}<br>
// floor value = ${Math.floor(negative)}<br>
// ceil value = ${Math.ceil(negative)}</h2>`)




// var num=+prompt("enter any number")
// var a=Math.abs(num)
// document.write(`the absoulte value of ${num} is ${a}`)

// var num =1

// document.write(`random dice value ${Math.floor(Math.random(num)*7)}`)



// var heads=prompt("enter player 1 name")
// var tail=prompt("enter player 2 name")
// var toss=Math.floor(Math.random()*2)
// if(toss == 0){
//     document.write("coin 2 <br>"+heads+" win the toss")
// }
// else{
//     document.write("coin 1<br>"+tail+"win the toss")
// }


// document.write(`random number between 1 and 100 : `+ Math.floor(Math.random()*100))

// var user=prompt("enter number 1 to 10")
// var random=Math.floor(Math.random()*11)
// if(user==random){
//     document.write("congratulations you are win")

// }
// else{
//     document.write("better luck next time")
// }


// var date= new Date()
// document.write(date)

// var monthname=["january","february","March","April","May","June","july","August","septembar","octubar","Novembar","decembar"]
// var month=new Date().getMonth();
// document.write(`current month = `+monthname[month])


// var days=["sun","mon","tues","wed","thur","fri","sat"]
// var day=new Date().getDay();
// alert("today is "+days[day])

// var days=["sun","mon","tues","wed","thur","fri","sat"]
// var day=new Date().getDay();
// var final=days[day]
// if(final =="sun","sat"){
//     alert("today is fun day")
// }
// else{
//     alert("this is work day")
// }

// var date=new Date().getDate()
// if (date >=14){
//     document.write("First fifteen days of the month")
// }
// else if(date <=30){
//     "last fifteen days of themonth"
// }

// var date=new Date()                
// var milli=new Date().getMilliseconds()
// var second=new Date().getSeconds()
// document.write(`currnet date ${date}<br>
//     milli sceonds count to 1970 1 january is ${milli}<br>
//    second count to 1 january 1970 is ${second} `)

// var time=new Date().getHours()
// document.write(time)
// if(time<=12){
//     alert("its A.M")
// }
// else{
//     alert("its P.M")
// }



// var date=new Date("31 dec,2020")
// document.write(date)

// var ramdan=new Date("11 mar,2024")
// var today=new Date()
// var diff=ramdan-today
// var math=Math.floor(diff/(1000*60*60*24))
// alert('this time difference in past ramdan'+math)



// var date=new Date("15 dec,2015")
// var second=new Date()
// var final=second-date
// document.write(`on reference date ${date} <br> ${final} seconds had passed since beginning of 2015 `)

// var date=new Date()
// var time=new Date().getTime("11:03")
// var time = Math.floor
// document.write(date+
//     time
// )


// var date=new Date()
// var date1=new Date("18 feb,1925 23:09:37")
// document.write(`current date and time ${date}<br>
    // 100 years back ${date1}`)








    document.write("<h1> age calulator </h1>")

    var present= new Date().getTime();
    var don=new Date(prompt("enter your date of birth")).getTime();
    var age=present-don
    var finalage=age/(1000*60*60*24*365)
    document.write(`your age is ${Math.floor(finalage)}`)

    // var present = new Date().getTime();
    // var dob = new Date(prompt("Enter your Date of Birth")).getTime();
    // var age = present - dob;
    // var finalAge = age / (1000 * 60 * 60 * 24 * 365);
    // document.write(`Your age is: ${Math.floor(finalAge)}`); 