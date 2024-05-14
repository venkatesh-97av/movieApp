import React from 'react'
import styled from 'styled-components'


const MovieContainer=styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor: pointer;
gap: 24px;

`

const CoverImage=styled.img`
height: 362px;
object-fit: cover;
`

const Moviename=styled.span`
font-size: 18px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`

const Infocolumn=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`

const Movieinfo = styled.span`
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;



const MovieComponent = ({items,setShowInfo}) => {
    // const{Title}=items
  return (
    <div>
       
     <MovieContainer onClick={()=>setShowInfo(items.imdbID)}>
        <CoverImage src={`${items.Poster}`} />
        <Moviename>{items.Title}</Moviename>
        <Infocolumn>
            <Movieinfo>Year:{items.Year}</Movieinfo>
            <Movieinfo>{}</Movieinfo>
        </Infocolumn>
      </MovieContainer>



    </div>
  );
}

export default MovieComponent
