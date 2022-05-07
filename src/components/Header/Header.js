import React from 'react';
import "./Header.css";
import {createTheme,TextField,ThemeProvider,MenuItem} from "@material-ui/core"
import categories from "../../data/category"
import {debounce} from "lodash"


const Header = ({category,setCategory,word,setWord,lightMode}) => {

  const darkTheme = createTheme({
  palette: {
    primary:{
      main:lightMode ? "#000":"#fff"
    },
    type:lightMode ?'light':'dark',
  },
});

 const onChangeHandler=(e)=>{
    handleChange(e.target.value)
 }

 const handleChange=(language)=>{
   setCategory(language);
   setWord("")
 }

 const handleText=debounce((text)=>{
   setWord(text)
 },1000)

  return (
    <div className="header">
      <span className="title">{word ? word : "WORD-FINDER"}</span>
      <div className="inputs">
      <ThemeProvider theme={darkTheme}>
      <TextField
       className="search" 
       label="Search a Word"
       id="standard-basic"
       
       onChange={(e)=>handleText(e.target.value)}
       />
     <TextField
          className="select"
          select
          label="Language"
          value={category}
          onChange={onChangeHandler}

        >  
       {
         categories.map((option)=>(
           <MenuItem key={option.label} value={option.label}
           >{option.value}</MenuItem>
         ))
       }
     
        
        </TextField>  
      </ThemeProvider>
      
      </div>
    </div>
  )
}

export default Header
