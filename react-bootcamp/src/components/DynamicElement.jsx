import React from "react";

function DynamicElement({ element }) {
    const CustomTag = element.htmlElementName;
    const Style = element.style;
    const InnerHTML = element.innerHTML;
    console.log(...element);
    return (
        <CustomTag style={Style}>
            {InnerHTML}
        </CustomTag>
    );
}

export default DynamicElement;