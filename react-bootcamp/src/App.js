// import DynamicElement from "./components/DynamicElement";

// function App() {
//     const pageElements = [
//         {
//             htmlElementName: "div",
//             innerHTML: "Div - Hello World!",
//             style: {
//                 border: "1px solid blue",
//                 backgroundColor: "#edeff2",
//                 color: "#4d4d4d",
//                 padding: "10px",
//                 margin: "10px",
//             },
//         },
//         {
//             htmlElementName: "section",
//             innerHTML: "Section - Hello World!",
//             style: {
//                 border: "1px solid green",
//                 backgroundColor: "#edeff2",
//                 color: "#4d4d4d",
//                 padding: "10px",
//                 margin: "10px",
//             },
//         },
//         {
//             htmlElementName: "p",
//             innerHTML: "p - Hello World!",
//             style: {
//                 border: "1px solid red",
//                 backgroundColor: "#edeff2",
//                 color: "#4d4d4d",
//                 margin: "10px",
//                 padding: "10px"
//             },
//         },
//     ];

//     return (
//         <>
//             {/* {pageElements.map((element, index) => (
//               //console.log(...element),
//                 <DynamicElement element={element} key={index} />
//             ))} */}
            
//         </>
//     );
// }

// export default App;

import { useState ,useRef} from "react";
import "./App.css";

export default function App() {
  const inputRef =useRef();
  const timerRef = useRef();
   
  console.log("render");   
  
  const startAlert = () => {
    setButtonText("Clicked");
    timerRef.current= setTimeout(() => {
        console.log(inputRef.current.value);
        alert("Input value " + inputRef.current.value);
        inputRef.current.value = "";
        setButtonText( "Click Me to Show an alert after 5 s");
    }, 3000);
    
  };
 
  const cancelAlert = () => {
    setButtonText( "Click Me to Show an alert after 5 s");
      clearTimeout(timerRef.current);
  }

  const [buttonText, setButtonText] = useState(
    "Click Me to Show an alert after 5 s"
  );
  
  return <div className="App">
            <div>
              <input style={{margin:'10px'}} type="text" ref={inputRef}/>
              <button style={{margin:'10px'}} onClick={startAlert}>{buttonText}</button>
              <button style={{margin:'10px'}} onClick={cancelAlert}>Cancel</button>
            </div>
         </div>;
}
