import "../styles/index.scss";  // Import the stylesheet
import { render } from "react-dom";
import {default as WPChunkApp} from "./start-app"

document.querySelectorAll('[wpchunk-start-app]')
.forEach(function(el) {
        let name = el.dataset.wpchunk.replaceAll("-", "_");
        let instance = parseInt(el.dataset.instance);
        let params = window[name][instance];
        render( <WPChunkApp {...params} />, el );
})
