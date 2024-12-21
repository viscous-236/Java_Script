const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0;i < 6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
// console.log(randomColor());

const str = document.getElementById('start');
str.addEventListener('click',function(){
    //console.log(setInterval(randomColor(),1000))
    const intervalId = setInterval(changeBgc);
    function changeBgc(){
        document.body.style.backgroundColor = randomColor();
    }
    const stp = document.getElementById('stop');
    stp.addEventListener('click',function(){
        clearInterval(intervalId);
        intervalId = null;
    })
})

