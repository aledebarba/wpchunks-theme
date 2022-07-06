import "./index.scss";  // Import the stylesheet
 
const HelloWorldReact = () => { 
    
    let ajaxUrl = params.ajaxUrl;
    let ajaxNonce = params.ajaxNonce;

    return (<>
    <div className ={"hello-world-react"}>
        <div class='content'>
            <span class="label">
                <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
                <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
            </span>
            <span class="data">WPChunk Component Loaded</span>
            <span class="label">Project Name:</span>
            <span class="data">hello-world-react</span>
            <span class="label">Component Function Name:</span>
            <span class="data">HelloWorldReact</span>
            <span class="label">Ajax URL</span>
            <span class="data">{ajaxUrl}</span>
            <span class="label">Ajax nonce</span>
            <span class="data">{ajaxNonce}</span>
            <span class="label">Build:</span>
            <span class="data">npm run build</span>
        </div>
    </div>
</>)}

/**
 * Component connection functions
 */
function getParams(){
    let res = { ajaxUrl: wpchunk_hello_world_react.ajaxUrl, ajaxNonce: wpchunk_hello_world_react.ajaxNonce };
    if ( wpchunk_hello_world_react.params.length > 0 ) { wpchunk_hello_world_react.params.forEach( param => { res = {...res, ...param }  }) }
    return res; 
}

const params = getParams(); // get the params from Component::react() function;
const { render, useState } = wp.element; // react functions are inside wp.element 
const componentSelector = document.querySelector('[wpchunk-hello-world-react]');
render(<HelloWorldReact />, componentSelector);