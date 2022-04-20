import DynamicElement from "./components/DynamicElement";

function App() {
    const pageElements = [
        {
            htmlElementName: "div",
            innerHTML: "Div - Hello World!",
            style: {
                border: "1px solid blue",
                backgroundColor: "#edeff2",
                color: "#4d4d4d",
                padding: "10px",
                margin: "10px",
            },
        },
        {
            htmlElementName: "section",
            innerHTML: "Section - Hello World!",
            style: {
                border: "1px solid green",
                backgroundColor: "#edeff2",
                color: "#4d4d4d",
                padding: "10px",
                margin: "10px",
            },
        },
        {
            htmlElementName: "p",
            innerHTML: "p - Hello World!",
            style: {
                border: "1px solid red",
                backgroundColor: "#edeff2",
                color: "#4d4d4d",
                margin: "10px",
                padding: "10px"
            },
        },
    ];

    return (
        <>
            {pageElements.map((element, index) => (
                <DynamicElement element={element} key={index} />
            ))}
        </>
    );
}

export default App;