var person = prompt("Please enter your name")

alert( 'Hello ' +  person)


var food = prompt('what kind of food you favourite')


if(food=='chinese food'){
 document.write(`<style>
.italySection{
display: none;

}
.japaneseSection{
display: none ;

}
</style>`)

}else if ( food=='italy food'){
   document.write(`<style>
.chineseSection{
display: none;

}
.japaneseSection{
display: none ;

}
</style>`)


}

else{
   document.write(`<style>
.italySection{
display: none;

}
.chineseSection{
display: none ;

}
</style>`)

}

var  rate = prompt('rate our website from 1 to 5 ')
if (rate == 1 || rate ==2){
  
   document.body.innerText = "😓";
}else{
  document.body.innerText = "😍";
  
}


