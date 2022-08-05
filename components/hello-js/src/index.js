import './index.scss';

function hello_js( params, element ) {
   const [ message, number ] = params;
   element.innerHTML = `Js Bundled function hello_js with parameters [ ${message}, ${number} ]`;
}

/*
 * get parametes from wordpress/php page 
 * and parse into correct js instance call 
*/
(function(){
  document.querySelectorAll('[wpchunk-hello-js]')
    .forEach(function(el) {
      let name = el.dataset.wpchunk.replace("-", "_");
      let instance = parseInt(el.dataset.instance);
      let params = window[name][instance];
      console.log("here->",params.params, el);
      hello_js( params.params, el );
    }
  )
})();