/**
 * js-bundle-test is a wpchunk javascript component model.
 * 
 */
import "./index.scss";

const jsBundleTest = ( { params, ajaxNonce, ajaxUrl}, el ) => { 

    el.innerHTML = /*html*/`
        <div class ="js-bundle-test">
            <div class='content'>
                <span class="label">
                    <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
                    <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
                </span>
                <span class="data">WPChunk Component Loaded</span>
                <span class="label">Project Name:</span>
                <span class="data">js-bundle-test</span>
                <span class="label">Ajax URL</span>
                <span class="data">${ajaxUrl}</span>
                <span class="label">Ajax nonce</span>
                <span class="data">${ajaxNonce}</span>
                <span class="label">Build:</span>
                <span class="data">npm run build</span>
            </div>
        </div>
    `;
} 

/*
 * get parametes from wordpress/php page 
 * and parse into correct js instance call 
*/
(function(){
    document.querySelectorAll('[wpchunk-js-bundle-test]')
      .forEach(function(el) {
        let name     = el.dataset.wpchunk.replaceAll("-", "_");
        let instance = parseInt(el.dataset.instance);
        let params   = window[name][instance];
        jsBundleTest( params, el );
      }
    )
  })();