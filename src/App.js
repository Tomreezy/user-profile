import styled from 'styled-components';
import NavBar from './components/NavBar';
import Users from './components/Users';

  
const Container= styled.div`
display:flex;
padding:2em;
flex-direction:column;
justify-content:center;
gap:1em;
`
 
 
 const App = () => {
   return (
     <Container>
       <NavBar />
       <Users />
     </Container>
   )
 }
 
 export default App
 