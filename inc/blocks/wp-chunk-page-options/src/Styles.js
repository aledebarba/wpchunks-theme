export const Styles = ( { children } ) => {
    let style = document.createElement('style');  
    document.head.appendChild(style);
    style.sheet.insertRule(children);

    return <></>;
}

export function css( rule ){
    let style = document.createElement('style');  
    document.head.appendChild(style);
    style.sheet.insertRule( rule );
}