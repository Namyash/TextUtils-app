import React  from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState(
    // {
    //     color:'black',
    //     backgroundColor:'white',

    // })
    // const [btntext,setBtnText] = useState('Enable Dark Mode')    
//    const toggleStyle = () => {
//         if(myStyle.color === 'black'){
//             setMyStyle({
//                 color:'white',
//                 backgroundColor:'black',
//                 border:'1px solid white'
//             })
//             setBtnText('Enable Dark Mode') 
//         }
//         else{
//             setMyStyle({
//                 color:'black',
//                 backgroundColor:'white'
//             })
//             setBtnText('Enable Light Mode') 
//         }
//     }
    let myStyle = {
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white', 
    }
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample"  style={myStyle}>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong>Analyze your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently . Be it word count, character count or..
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           Textutils is a free character counter tool that provides instant character count and word count statistics for a given text . TextUtils reports the number of words and characters . Thus it is suitable for writing text with word/character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           This word counter software works in any web browsers such as Chrome , Firefox , Internet Explorer , safari ,opera etc . it suits to count characters in Facebook , blog , books ,excel document , pdf doc , essays etc.
        </div>
        </div>
    </div>
</div>

{/* <div className="container my-3">
    <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
</div> */}
    </div>
  )
}
