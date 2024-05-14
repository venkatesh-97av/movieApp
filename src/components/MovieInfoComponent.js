import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_KEY } from '../App'


const Container=styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: center;
border-bottom: 1px solid lightgray;
`

const CoverImage=styled.img`
object-fit: cover;
height: 352px;
`

const Infocolumn=styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`

const Moviename = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &span{
    opacity: 0.5;
  }
`


const Movieinfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: capitalize;

`;

const Close=styled.span`
font-size: 16px;
font-weight: 600;
color: black;
background: lightgray;
height: fit-content;
padding: 8px;
border-radius: 50%;
cursor: pointer;
opacity: 0.6;
`

const MovieInfoComponent = (props) => {

    const{movie}=props;
    const {setShowInfo}=props
    const[data,setData]=useState()
    console.log(data)

    useEffect(()=>{
            axios.get(`https://omdbapi.com/?i=${movie}&apikey=${API_KEY}`).then((res)=>{setData(res.data)})
            
        },
    
    [movie])
  return (
    <Container>
      <CoverImage src={`${data && data.Poster  && data.Poster}`} />
      <Infocolumn>
        <Moviename>Title:{data && data.Title}</Moviename>
        <Movieinfo>Country:{data && data.Country}</Movieinfo>
        <Movieinfo>Genre:{data && data.Genre}</Movieinfo>
        <Movieinfo>Actors:{data && data.Actors}</Movieinfo>
        <Movieinfo>Type:{data && data.Type}</Movieinfo>
        <Movieinfo>Year:{data && data.Year}</Movieinfo>
        <Movieinfo>Plot:{data && data.Plot}</Movieinfo>
        <Movieinfo>Director:{data && data.Director}</Movieinfo>

      </Infocolumn>
      <Close onClick={()=>setShowInfo('')}>X</Close>
    </Container>
  );
}

export default MovieInfoComponent
