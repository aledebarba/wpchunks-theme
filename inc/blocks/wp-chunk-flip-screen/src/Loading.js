import { Spinner } from '@wordpress/components';

const css = /*css*/ `
#loading-component-cssom-styles {
    color: #0008
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 2rem;
    border: 1px solid gray;
    border-left: 3px solid dodgerblue;
    display: flex;
    gap: 16px;
    }
`;

export const Loading = ( { message } ) => {
        
    let style = document.createElement('style');  
    document.head.appendChild(style);
    style.sheet.insertRule(css);

    return (
        <div id={"loading-component-cssom-styles"}>
            <Spinner /><span>{message || "Carregando..."}</span>
        </div>
    )  
}
