a=10
b="10"
document.write("<br> The value is ",a<=b)
function z(){
for(var a=0;a<=10;a++){
    document.write("<br> hello and welcome all ")
}
}
z()
if(2>3){
    document.write("<br> The first value is greater")
}
else{
    document.write("<br> The second value is greater")
}
var username=prompt("Enter the username :")
var password=prompt("Enter the password :")
if(username=="admin" && password=="123"){
document.write("<br> you're logged in")
}
else if(username=="admin" || password=="123"){
    document.write("<br> The second if condition is executed")
    }
else{
    document.write("<br> Enter the correct credentials")
}