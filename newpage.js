const BASE_URl="https://www.omdbapi.com/?i=tt3896198&apikey=de71a43";

const movie_name=localStorage.getItem("moviename");
console.log(movie_name);

const getdata= async(moviename)=>{
  
    const url=`https://www.omdbapi.com/?i=tt3896198&apikey=de71a43&t=${moviename}`;
   let response=await fetch(url);
   //console.log(response);
   let data= await response.json();

   console.log(data);
   };
   
   getdata(movie_name);