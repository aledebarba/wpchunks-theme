import "./index.scss";  // Import the stylesheet
import { useState } from "react";
import { render } from "react-dom";

const InfoItem = ( { title, value } ) => <>
    <div class='info-item'>
        <div class="component-label">{title}</div>
        <div class="component-data">{value}</div>
    </div>
</>

const HelloReact = ( props ) => {    

    const { ajaxNonce, ajaxUrl} = props;
    const [ message, instance ] = props.params; 

    return (<>
    <div className="hello-react">
        <div class="content">
            <h1 class='title'>
                React Component Example
            </h1>
            <div class='icons'>
                <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
                <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
                <img src="https://user-images.githubusercontent.com/28566959/177224255-cb1d9437-1222-44ce-a2f9-0f35d1c51a11.png"/>
            </div>
            <div class='info'>
                <InfoItem title="RXName:" value="hello-react" />
                <InfoItem title="Nonce:" value={ajaxNonce} />
                <InfoItem title="Message:" value={message} />
                <InfoItem title="Instance:" value={instance} />
            </div>
            <div class='commands'>
                <div class='command'>
                    <div>Develop</div>
                    <div>npm run start</div>
                </div>
                <div class='command'>
                    <div>Build</div>
                    <div>npm run build</div>
                </div>
                <div class='command'>
                    <div>Browser sync</div>
                    <div>npm run bs &lt;path&gt;</div>
                </div>
            </div>            
        </div>
    </div>
</>)}

(function(){document.querySelectorAll('[wpchunk-hello-react]').forEach(function(el) {
    let name = el.dataset.wpchunk.replace("-", "_");
    let instance = parseInt(el.dataset.instance);
    let params = window[name][instance];
    render( <HelloReact {...params} />, el );
})})();