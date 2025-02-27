function generatepassword(length){
    var chara="abcdefghigklmopqrstuvwxyz"
    var capi="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var num="0123456789"
    var spec="!@#$%^&*()_"
    var a=chara+capi+num+spec
    var password="";


for(var i=0; i<length;i++){
    var randompassword=Math.floor(Math.random()*a.length)
    password+=a[randompassword]
}

return password
}
document.write(`<br><p><b> password</b>   : ${generatepassword(12)} </p>`)
document.write(`<br><p><b>password</b>    : ${generatepassword(12)} </p>`)
document.write(`<br><p><b>password</b>    : ${generatepassword(12)} </p>`)
document.write(`<br><p><b>password</b>    : ${generatepassword(12)} </p>`)




