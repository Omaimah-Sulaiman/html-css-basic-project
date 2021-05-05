// var person = prompt("Please enter your name")

// alert( 'Hello ' +  person)


var food = prompt('what kinf of food you favourite')


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



