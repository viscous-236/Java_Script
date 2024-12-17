//___________NOTES____________
// document.getElementById('title').id,//'title'
// document.getElementById('title').className,//'heading'
// document.getElementById('title').getAttribute('class'),//'heading'
// document.getElementById('title').getAttribute('id'),//'title'
//document.getElementById('title').setAttribute('class','test1'),//undefined but class will be modified and it will overwrite the previous class
/*
const title = document.getElementById('title');
title.style.backgroundColor = 'green'
'green'
title.style.col = 'green'
'green'
title.style.color = 'red'
'red'
title.style.padding = '15px'
'15px'
title.style.borderRadius = '15px'
'15px'
Will modify ACCORDING TO CSS to commands
title.innerHTML = will show all the elemants


+++++++++++++querySelector+++++++++++++
document.querySelector('h1') //will select the first h1 element
document.querySelector(#title) //will select the element with id title
document.querySelector('.heading') //will select the element with class heading
document.querySelector('input[type="password"]') //will select the input element with type password
const myH1 = document.querySelectorAll('h1') //will select all the h1 elements
myH1[0].style.color = 'red' //will change the color of the first h1 element
const ele = document.getElementsByClassName('list-item') // not a node list so we can't use forEach
const newArr = Array.from(ele)//converts the HTML collection to an array
newArr.forEach(function(l){
    console.log(l)
})

*/
