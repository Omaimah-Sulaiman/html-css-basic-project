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

}else if ( food == ' japanese food'){
   document.write(`<style>
.italySection{
display: none;

}
.chineseSection{
display: none ;

}
</style>`)
}

else{
  
}


 src="">var  rate = prompt('rate our website from 1 to 5 ')
if (rate == 1 || rate ==2){
  
   document.write(`<span style='font-size:100px;'>&#128531</span>;`)
}else{
  document.write(`<span style='font-size:100px;'>&#128525</span>;`)
  
}