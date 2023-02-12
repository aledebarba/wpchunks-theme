import { useState } from "react";

const Index = ( props ) => { 
    
    const ajaxUrl = props.ajaxUrl;
    const ajaxNonce = props.ajaxNonce;
    // const [ other, params ] = props.params;

    return (<>
    <div className="start-app">
        <div className="content">
                <h1 className='title'>
                    Index
                </h1>                
            </div>
    </div>
</>)}

// create an About component
export const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>
                This is the about page
            </p>
        </div>
    )
}

// create a Contact component
export const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>
                This is the Contact page
            </p>
        </div>
    )
}


export default Index;