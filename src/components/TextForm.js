import React, {useState} from 'react' 

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clciked");
        let newText  =text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to Upper case","success");
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to Lower case","success");
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white' : '#042743'}}>

    <div>
        <h1 >{props.heading}</h1>
        

        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? '#13466e' : 'white',color: props.mode==='dark'? 'white' : '#042743'}}></textarea>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    </div>
    </div>

    <div className="conatiner my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
