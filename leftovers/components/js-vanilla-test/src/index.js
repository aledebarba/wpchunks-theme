/**
 * js-vanilla-test is a wpchunk javascript component model.
 * 
 */
const jsVanillaTest = ( { params, ajaxUrl, ajaxNonce }, el ) => { 

    el.innerHTML = /*html*/`
        <div class ="js-vanilla-test">
            <div class='content'>
                <span class="label">
                    <img src="https://user-images.githubusercontent.com/28566959/177341564-50baf21f-5b21-449e-875a-990d41f97840.png"/>
                    <img src="https://user-images.githubusercontent.com/28566959/177224209-55c1bb68-c9f1-48c8-ba07-1635894c7202.png"/>
                </span>
                <span class="data">WPChunk Component Loaded</span>
                <span class="label">Project Name:</span>
                <span class="data">js-vanilla-test</span>
                <span class="label">Ajax URL</span>
                <span class="data">${ajaxUrl}</span>
                <span class="label">Ajax nonce</span>
                <span class="data">${ajaxNonce}</span>
            </div>
        </div>
    `;
} 

/*
 * get parametes from wordpress/php page 
 * and parse into correct js instance call 
*/
(function(){
    document.querySelectorAll('[wpchunk-js-vanilla-test]')
      .forEach(function(el) {
        let name     = el.dataset.wpchunk.replaceAll("-", "_");
        let instance = parseInt(el.dataset.instance);
        let params   = window[name][instance];
        jsVanillaTest( params, el );
      }
    )
  })();