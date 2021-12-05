import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText);
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        settext(event.target.value)
    }
    const [text, settext] = useState('Enter text here');

    return (
        <div>
               <h1>{props.heading}</h1>
                <div className="mb-3">
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primany" onClick={handleUpClick}>Convert to uppercase</button>

        </div>
    )
}
