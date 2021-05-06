// var person = prompt("Please enter your name")

// alert( 'Hello ' +  person)


// var food = prompt('what kind of food you favourite')


// if(food=='chinese food'){
//  document.write(`<style>
// .italySection{
// display: none;

// }
// .japaneseSection{
// display: none ;

// }
// </style>`)

// }else if ( food=='italy food'){
//    document.write(`<style>
// .chineseSection{
// display: none;

// }
// .japaneseSection{
// display: none ;

// }
// </style>`)


// }

// else if ( food == ' japanese food'){
//    document.write(`<style>
// .italySection{
// display: none;

// }
// .chineseSection{
// display: none ;

// }
// </style>`)
// }

// else{
  
// }


// var  rate = prompt('rate our website from 1 to 5 ')
// if (rate == 1 || rate ==2){
  
//    document.write(`<span style='font-size:100px;'>&#128531</span>;`)
// }else{
//   document.write(`<span style='font-size:100px;'>&#128525</span>;`)
  
// }

var favMail = prompt('Whats your favourite mail?')

while (favMail !== 'italy'&& favMail !=='chinese'&& favMail !=='japanese' ){
 favMail = prompt('try again') 
}

var mailCount = prompt('How many mail do you want to see ?')


var image = ''
for(var x = 0; x < mailCount ;x++){
  if(favMail ==='italy'){
    image = image + '<img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Stamp-of-Approval-Spaghetti-Sauce_EXPS_MTCBBZ17_39564_D02_24_2b-5.jpg?resize=768,768">'
  }else if( favMail ==='japanese'){
    image = image + '<img src="https://images.japancentre.com/page_elements/image1s/1515/original/tofu-bean-curd.jpg?1470240775">'
  }else if(favMail ==='chinese'){
    image = image + '<img src="https://images.chinahighlights.com/allpicture/2019/11/a47d9323b7ae409ba96e628d_894x596.jpg">'
  }
}
  document.write(image)




