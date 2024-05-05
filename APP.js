let searchbtn=document.getElementById("searchbtn");
let inputsearch=document.getElementById("input_search");
let moviename;


searchbtn.addEventListener("click",()=>{
     moviename=inputsearch.value;
     console.log(moviename);
     localStorage.setItem("moviename",moviename);

    window.location.href="newpage.html";
   
})