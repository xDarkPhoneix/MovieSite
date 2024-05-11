const BASE_URl="https://www.omdbapi.com/?i=tt3896198&apikey=de71a43";

let title=document.getElementById("title");
   let plot=document.getElementById("plot");
   let actor=document.getElementById("actor");
   let genre=document.getElementById("genre");
   let movie_img=document.getElementById("image-container");
   let myImage=document.getElementById("myImage");
   let hero=document.getElementById("relased_date");
   let awards=document.getElementById("awards");
   let country=document.getElementById("country");
   let director=document.getElementById("director");
   let language=document.getElementById("language");
   let year=document.getElementById("year");
   let runtime=document.getElementById("runtime");
   let imdbrating=document.getElementById("imdbrating");
   let rating=document.getElementById("rating");
   let writer=document.getElementById("writer");

 
let url;
const movie_name=localStorage.getItem("moviename");
console.log(movie_name);
const getdata= async(moviename)=>{
  
    const url=`https://www.omdbapi.com/?i=tt3896198&apikey=de71a43&t=${moviename}`;
   let response=await fetch(url);
   //console.log(response);
   let data= await response.json();
   title.innerText="Title: " +data.Title;
  actor.innerText="Actos: " +data.Actors;
  genre.innerText="Genre: "+ data.Genre;
  myImage.src=data.Poster;
   plot.innerText="Plot: "+data.Plot;
   hero.innerText="Released Date: "+data.Released;
   awards.innerText="Awards: "+data.Awards;
   country.innerText="Country :"+data.Country;
   director.innerText="Director :"+data.Director;
   year.innerText="Year :"+data.Year;
   runtime.innerText="Runtime :"+data.Runtime;
   imdbrating.innerText="imdbRating :"+data.imdbRating;
   writer.innerText="Writer : "+data.Writer;
   language.innerText="Language :"+data.Language;

   console.log(data);


  
   };

   getdata(movie_name);

