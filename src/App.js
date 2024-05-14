import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import { useState } from "react";
// import axios from "axios";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "749dc0ba";
// const Container=styled.div`
// display: flex;
// flex-direction: column;
// `;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
  align-items: center;
`;

const Appname=styled.div`
display:flex;
flex-direction: row;
align-items: center;
font-size: 25px;
`
const Searchbox=styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px;
background-color: aliceblue;
border-radius: 6px;
margin-left: 20px;
width: 50%;
background-color: white;
height: 20px;
`

const SearchInput=styled.input`
color: black;
font-size: 16px;
font-weight: bold;
border: none;
outline: none;
margin-left: 15px;

`

const MovieListContainer=styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
justify-content: space-evenly;


`




function App() {
  const [searchQuery,setSearchQuery]=useState('')
  const [timeOut,setTimeOut]=useState()
  const [movieList,setMovieList]=useState([])
  const[showInfo,setShowInfo]=useState()


  const fetchData=async(searchQuery)=>{
    const response=await fetch(`https://omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
    const data=await response.json();
    console.log(data.Search)
    setMovieList(data.Search)
  }



  const handleChange=(e)=>{
    clearTimeout(timeOut)
    setSearchQuery(e.target.value)
    const timeId=setTimeOut(()=>{
        // console.log('Api calling')
        fetchData(searchQuery)
    },500)

    setTimeOut(timeId)
  }


  // console.log(movieList)




  return (
    <div className="App">
      
          <Header>
            <Appname>
              React Movie App
            </Appname>
            <Searchbox>
              <SearchInput placeholder="Search movie.." value={searchQuery} onChange={handleChange}/>
              
            </Searchbox>

            </Header>

            {showInfo && <MovieInfoComponent movie={showInfo} setShowInfo={setShowInfo}/>}

            <MovieListContainer>
              {movieList && movieList.length ? (movieList.map((item)=> <MovieComponent items={item} setShowInfo={setShowInfo}/> )):'Search Your Movie and Find Details'   
              }

            </MovieListContainer>

            
        
    </div>
  );
}

export default App;
