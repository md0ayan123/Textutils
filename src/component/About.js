import React, { useState, useSyncExternalStore } from 'react'

export default function About(props) {


let myStyle={
  color:props.mode==="dark"?"white":"#042743",
  backgroundColor:props.mode=="dark"?"rgb(36 74 104)":"white"
  





  


  }

  
   

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3 ' style={ {color:props.mode==="dark"?"white":"#042743"}}>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item"style={myStyle} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne">
      
      <strong>Analyze your text</strong>  
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
       Textutils gives you a way to analyze your text quickly and efficiently.Be it word count, character count.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
      Textutils is a free  character counting tools to provide instant character count & word count statistics for given text. Textutils report the number of words and characters.Thus it is suitable for writing text with word/ character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        This word counter software works in web browser such as chrome, firefox, Internet Explorer, Safari, Opera. It suits ti counter character in facebook, blog, book, excel document, pdf document, essay, etc.
      </div>
    </div>
  </div>
</div>
 
    </div>
  )
}
