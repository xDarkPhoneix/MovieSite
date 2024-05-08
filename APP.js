let searchbtn=document.getElementById("searchbtn");
let inputsearch=document.getElementById("input_search");
let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");
let moviename;


searchbtn.addEventListener("click",()=>{
    moviename=inputsearch.value;
     console.log(moviename);
     localStorage.setItem("moviename",moviename);
    window.location.href="newpage.html";
   
})




box1.addEventListener("click",()=>{
    moviename="ranneeti";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})

box2.addEventListener("click",()=>{
    moviename="lootera";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})

box3.addEventListener("click",()=>{
    moviename="monkey man";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})

box4.addEventListener("click",()=>{
    moviename="white rose";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})

box5.addEventListener("click",()=>{
    moviename="bajirao mastani";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})
box6.addEventListener("click",()=>{
    moviename="shaitaan";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})

box7.addEventListener("click",()=>{

    moviename="anabeelle setupathi";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})

box8.addEventListener("click",()=>{
    moviename="heeramandi";
  console.log(moviename);
  localStorage.setItem("moviename",moviename);
  window.location.href="newpage.html";
   

})



