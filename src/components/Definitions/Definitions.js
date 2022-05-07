import React from 'react'
import "./Definitions.css"

const Definitions = ({word,meanings,category,lightMode}) => {

  console.log("@@",meanings)
  
  return (
    <div className="meanings"> 
   
   {
      word ==='' ? (
      <span className="subTitle">
        Start by typing a word in search
      </span>
       ) :(
      meanings.map((mean)=>
      mean.meanings.map((item)=> 
      item.definitions.map((def=>(
        <div
        className="singleMean"
        style={{backgroundColor:lightMode ? "#3b5360":"white" , color:lightMode ?"white":"black"}}
        >
        <b>{def.definition}</b>
        <hr style={{backgroundColor:"black",width:"100%"}}/>
        <b>Synonyms:</b>
        {item.synonyms.map((s)=>`${s} , `)}
        
        </div>
      ))
     )
    ))
)
 } 
</div>
  )
}

export default Definitions
