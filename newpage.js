const BASE_URl="https://www.omdbapi.com/?i=tt3896198&apikey=de71a43";

let title=document.getElementById("title");
   let plot=document.getElementById("plot");
   let actor=document.getElementById("actor");
   let genre=document.getElementById("genre");
   let movie_img=document.getElementById("image-container");
   let myImage=document.getElementById("myImage");
let url;
const movie_name=localStorage.getItem("moviename");
console.log(movie_name);

const getdata= async(moviename)=>{
  
    const url=`https://www.omdbapi.com/?i=tt3896198&apikey=de71a43&t=${moviename}`;
   let response=await fetch(url);
   //console.log(response);
   let data= await response.json();
   title.innerText=data.Title;
  actor.innerText=data.Actors;
  genre.innerText=data.Genre;
myImage.src=data.Poster;
  console.log(data.Poster);
   plot.innerText=data.Plot;
  console.log(plot.innerText);
   

   console.log(data);
   };
   
   getdata(movie_name);

   

