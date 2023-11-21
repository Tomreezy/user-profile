import styled from "styled-components"
import { people } from "../Data"

const Wrapper=styled.div`
flex:1;
min-width:15em;
background-color:lightgray;
padding:2em;
display:flex;
justify-content:space-around;
border-radius:0.5em;
transition:all 0.5s ease;
`
const People=styled.div`
display:flex;
flex:1;


&:hover ${Wrapper}{
    transform:scale(1.1);
    background-color:white;
    outline:1px solid gray;
}
`

const Container= styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:1em;
    
  
`

const ImgContainer=styled.div`
border-radius:50%;
width:5em;
height:5em;
overflow:hidden;
display:flex;
justify-content:center;
align-items:start;
`

const Img=styled.img`
width:100%;
object-fit:cover;
`
const InfoCont=styled.div`

`
const Name=styled.h2``
const State=styled.h3``
const Accessories=styled.div``



const Users = () => {
  return (
    <Container>
     
     {people.map(person=>(
     <People  key={person.id}>  
     <Wrapper>
        <ImgContainer>
         <Img src={person.img} alt="people"/>
        </ImgContainer>
        <InfoCont>
            <Name>{person.name}</Name>
            <State>{person.State}</State>
            <Accessories>{person.accessories}</Accessories>
        </InfoCont>
     </Wrapper>
     </People>
     ))}
    
    
    </Container>
  )
}

export default Users
