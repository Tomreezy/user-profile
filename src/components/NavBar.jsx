import styled from "styled-components"
import { CiSearch } from "react-icons/ci";
import { mobile } from "../responsive";
import { TabletSmall } from "../responsive";
import { Tablet } from "../responsive";
import { Screen } from "../responsive";


const Container= styled.div` 
display:flex;
flex-direction:column;
${mobile({marginBottom:"1em"})};
${TabletSmall({marginBottom:"1em"})};


width:100%;
justify-content:center;
`
const User= styled.h1`
text-align:start;
font-weight:900;
${mobile({
marginBottom:"1em"
})};
${TabletSmall({
marginBottom:"1em"
})};
${Tablet({marginBottom:"-0.2em"})};
${Screen({marginBottom:"1em"})}


`

const Nav=styled.div`
   display:flex;
   
   justify-content:space-between; 
   align-items:center;
   padding: 0.1em 0em;
   width:100%;
   margin-top:-1.9rem;
   overflow:hidden;
   ${mobile({
    flexDirection:"column",
    alignItems:"start",
    justifyContent:"start"
   })};
   ${TabletSmall({
    flexDirection:"column",
    alignItems:"start",
    justifyContent:"start"
   })};
   ${Tablet({margin:"1em 0em"})}
`
const InputCont=styled.div`
    display:flex;
    justify-content:start;
    align-items:center;
    padding:0.7em ;
    border:lightgrey solid 1px;

`

const Links= styled.ul`
    display:flex;
    ${mobile({
    padding:"0",
    marginTop:"1.3em"
    })};
    ${TabletSmall({
    padding:"0",
    marginTop:"1.3em"
    })};
    ${Tablet({
    padding:"0",
    marginTop:"1.3em"
    })}

`
const Link= styled.li`
   list-style-type:none; 
   margin: 0 2em;
   padding: 1em;
   font-weight:800;
   transition: all 0.1s ease;
   ${mobile({margin:"0em 0.8em 0em 0.1em",padding:"0",fontSize:"0.9em",

})};
${TabletSmall({margin:"0em 0.8em 0em 0.1em",padding:"0",fontSize:"0.9em",

})};
${Tablet({margin:"0em 0.9em 0em 0.1em",padding:"0",fontSize:"1.3em",

})};
${Screen({margin:"0em 0.7em 0em 0.0em",padding:"0",fontSize:"1.5em",

})};



   &:hover{
    background-color:lightblue;
    cursor: pointer;
    border-radius:0.6em;
    ${mobile({backgroundColor:"white",transform:"scale(1.05)"})};
    ${TabletSmall({backgroundColor:"white",transform:"scale(1.05)"})}
   };

;
   &:active{
    color:blue;
    text-decoration:underline;  
   };

`
const Input=styled.input`
 border:none;
 outline:none; 
 margin-left:0.2em;  
`


const NavBar = () => {
  return (
    <Container>
      <User>
       Users
      </User>
      <Nav>
       <InputCont>
        <CiSearch size={24}/>
        <Input placeholder="Search users"/>
       </InputCont>
       <Links>
         <Link>Reputation</Link>
         <Link>New</Link>
         <Link>Voters</Link>
         <Link>Editors</Link>
         <Link>Moderators</Link>
       </Links>
      </Nav>
    </Container>
  )
}

export default NavBar
