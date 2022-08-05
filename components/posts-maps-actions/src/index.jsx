import "./index.scss";  // Import the stylesheet
import Fpmaps from './filter-posts-map';
import { render } from "react-dom";

const PostsMapsActions = ( props ) => { 
    
    const ajaxUrl = props.ajaxUrl;
    const ajaxNonce = props.ajaxNonce;
    // const [ other, params ] = props.params;

    return (<>
        <div className="filter-posts-maps">
            <Fpmaps />
        </div>
    </>
)}

/**
 * Component connection functions
 * You must keep this code as is
 */
 (function(){document.querySelectorAll('[wpchunk-posts-maps-actions]')
    .forEach(function(el) {
        let name = el.dataset.wpchunk.replaceAll("-", "_");
        let instance = parseInt(el.dataset.instance);
        let params = window[name][instance];
        render( <PostsMapsActions {...params} />, el );
    })
})();