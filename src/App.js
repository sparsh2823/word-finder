import './App.css';
import axios from 'axios';
import {useEffect,useState} from "react"
import { Container,withStyles} from '@material-ui/core';
import Header from "./components/Header/Header"
import Definitions from "./components/Definitions/Definitions"
import {grey} from "@material-ui/core/colors"
import Switch from '@material-ui/core/Switch';

function App() {

  const[meanings,setMeanings]=useState([])
  const[category,setCategory]=useState("en")
  const[word,setWord]=useState('')
  const [lightMode,setLightMode]=useState(false)
  
  const DarkMode = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: grey[500],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);







  const dictionaryAPI = async ()=>{
   try{
        const d = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

         setMeanings(d.data)
    }
    catch(error){
       console.log(error);
    }
  }
  
  useEffect(()=>{
    dictionaryAPI();
  },[word,category])

  return (
    <div className="App" 
    style={{
      height:"100vh",
      backgroundColor:lightMode ? "#fff":"gray",
      color:lightMode ? "black":"white",
      transition:"all 0.5s linear"
      }}> 
      
    
    <Container 
    maxWidth="md"
    style={{
      display:'flex',
      flexDirection:"column",
      height:"100vh",
      justifyContent:"space-evenly" 
    }}>
     <div 
     style={{position:"absolute",top:0,right:15,paddingTop:10}}>
     <span>{lightMode ? "Dark Mode":"Light Mode"}</span>
     <DarkMode checked={lightMode} onChange={()=>setLightMode(!lightMode)}/>  
     
     </div>
    <Header
     category={category}
     setCategory={setCategory} 
     word={word}
     setWord={setWord}
     lightMode={lightMode}
      />
     {meanings && (
       <Definitions word={word} meanings={meanings} category={category} lightMode={lightMode}/>
     )}
    </Container>
    </div>
  );
}

export default App;
