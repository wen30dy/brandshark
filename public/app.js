var dots = document.getElementsByClassName("dots");
var moreText = document.getElementsByClassName("more");
var btnText = document.getElementsByClassName("myBtn");
for(let i=0;i<3;i++){
  
  moreText[i].style.display = "none";
  btnText[i].addEventListener('click',function(){
      if (dots[i].style.display === "none") {
          dots[i].style.display = "inline";
          btnText[i].innerHTML = "Read more"; 
          moreText[i].style.display = "none";
      } else {
          dots[i].style.display = "none";
          btnText[i].innerHTML = "Read less"; 
          moreText[i].style.display = "inline";
      }
  })
}
// document.body.clientWidth
const servicesheadimg=document.getElementById('servicesheadimg');
const howimg2=document.getElementsByClassName('howimg2');
const star=document.getElementsByClassName('star');


function move(element){
    element.style.transition="all 7s";
element.style.transform="translateY(50px)";
setTimeout(()=>{
    element.style.transform="translateY(-50px)";
},7000);

setInterval(() => {
    element.style.transform="translateY(50px)";
setTimeout(()=>{
    element.style.transform="translateY(-50px)";
},7000);
}, 14000);
}
move(servicesheadimg);
for(let i=0;i<howimg2.length;i++){
    move(howimg2[i]);
}
// howimg2.array.forEach(ele => {
//     move(ele);
    
// });
const cities=document.getElementById('cities');
cities.style.transition="all 1.5s";
var color=["#7ef6fa33","#00c8ff15","#0bac913a","#00c8ff41","#0bac9157","#0bac9121"];
setInterval(() => {
    cities.style.backgroundColor=color[Math.floor(Math.random()*6)];
}, 1500);

function rota(ele){
    ele.style.transition="all 4s";
    ele.style.transform="rotate(360deg)";
setInterval(() => {
    // rotano++;
    var rotano=Math.floor(Math.random()*360);
    ele.style.transform=`rotate(${rotano}deg)`;
}, 4000);
}
// var rotano=1;
// function rota(ele){
//     ele.style.transition=`all ${4+rotano*4}s`;
//     ele.style.transform="rotate(360deg)";
// setInterval(() => {
//     rotano++;
//     ele.style.transform=`rotate(${rotano*360}deg)`;
    
// console.log(rotano,4+rotano*4,rotano*360,4000+(rotano*4000))
// }
// , 4000+(rotano*4000));
// }
for(let i=0;i<star.length;i++){
    rota(star[i]);
}

                 