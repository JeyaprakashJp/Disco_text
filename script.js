let intertvalId;
document.getElementById("h1").addEventListener('click',() => {
   intervalId = setInterval(func,300)
});

 function func() {
    if(true){
const rand =Math.floor(Math.random() * 4);
    
   if(rand==0){
    document.getElementById("h1").innerHTML = "LETS &#128520 ";
    const head = document.querySelector('#h1');
head.className = "bg1";
   }
   else if(rand==1){
    document.getElementById("h1").innerHTML = "ROCK &#128526";
    const head = document.querySelector('#h1');

    head.className = "bg2"

   }
   else if(rand ==3){
    document.getElementById("h1").innerHTML = "HIT HARD &#11088";
    const head = document.querySelector('#h1');

    head.className = "bg3"

   }
   else{
    const head = document.querySelector('#h1');

    document.getElementById("h1").innerHTML = "DANCE &#128378;&#127996";
    head.className = "bg4"

   }}
   }




