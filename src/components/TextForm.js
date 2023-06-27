import React , { useState } from 'react';
// import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const clearText = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = '' 
        setText(newText);
        props.showAlert("All cleared up!","success");
    }
    const capitalizeFirstLetter = () => {
        let words = text.split(" ");
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let newText = capitalizedWords.join(" ");
        setText(newText);
        props.showAlert("Done!","success");
      };
      
    // const fetchemails = () => {
    //     let emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    //     setText(emails ? emails.join(", ") : ""); // Join the matched emails with a comma (or any separator) or set an empty string if no emails are found
    //     return emails;
    //   };
      
    const reverseText = () =>{
        let reversedText = text.split('').reverse().join('');
        setReversedText(reversedText);
        props.showAlert("All text has been reversed , You can see it below Preview","success");
        // return reversedText;
    }
    const removeextraspace = () =>{
        let  newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All the extra spaces has been removed","success");
        // return reversedText;
    }
    const getemails = () =>{
        let fetchemails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        setfetchedemails(fetchemails);
        
        // return reversedText;
    }
    const copytoclipboard = () =>{
        navigator.clipboard.writeText(text);
        alert('copied to clipboard successfully');
        
    }
    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    const [reversedText,setReversedText] = useState('');
    const [fetchemails,setfetchedemails] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText('new text'); //correct way to change the state
  return (
    <>
   <div className="container"  style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h1 className="mb-4">{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
  <div className="button-container my-3">
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={capitalizeFirstLetter}>Capitalize First Letter</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={reverseText}>Reverse The Text</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={removeextraspace}>Remove Extra Spaces</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={getemails}>fetch emails</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={copytoclipboard}>Copy To Clipboard</button>
  <button className='btn btn-primary mx-1 my-1 px-2 py-1' disabled={text.length===0} onClick={clearText}>Clear Text</button>

  </div>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Preview : </h1>
    <p>{text.length>0?text:"Nothing to preview it!"}</p>
    <h1>Your Text Summary : </h1>
    <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words <b>{text.length}</b> characters ||
    <b> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read
    <p><span className="fw-bold">reversed text is </span>: {reversedText}</p>
    <h1>Emails fetched from the text you have entered</h1>
    <p>{fetchemails}</p>
    <p>{clearText}</p>
  </div>
  </>
  )
}

