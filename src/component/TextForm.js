import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
      // console.log("UpperCase was clicked " + text );
      let newText = text.toUpperCase()
      setText(newText)
      props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick=()=>{
     
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to LowerCase!","success")

    }
    
    const handleClearText=()=>{
      
      let newText = ""
      setText(newText)
      props.showAlert("clear text !","success")

    }
    const handleOnChange =(event)=>{
      // console.log("On Change");
      setText(event.target.value)
    }
    const [text, setText] = useState("");
   // text ="new text"; //Wrong way to set state
  //  setText ="new text"; //Correct way to set state
    return (
      <>
    <div className='container'style={{color:props.mode==="dark"?"white":"#042743"}}>
     <h1 className='mb-4'>{props.heading} </h1> 
<div className="mb-3">
  <textarea className="form-control" value={text}id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#090a20":"white",color:props.mode==="dark"?"white":"black"}}rows="8"></textarea>
</div>
<button disabled={text.length===0}className="btn btn-primary mx-2 m-t2"style={{border:'2px solid black'}} onClick={handleUpClick}>convert to UpperCase</button>
<button disabled={text.length===0}className="btn btn-primary mx-2 mt-2"style={{border:'2px solid black'}} onClick={handleLoClick}>convert to LowerCase</button>
<button disabled={text.length===0}className="btn btn-primary mx-2 mt-2"style={{border:'2px solid black'}} onClick={handleClearText}>Clear  Text</button>
    </div>
    <div className="container my-3"style={{color:props.mode==="dark"?"white":"dark"}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+npm/).filter((element)=>{return element.length!==0}).length} word and{text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
