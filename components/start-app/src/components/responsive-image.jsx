import React from 'react'

const ResponsiveImage = ( { srcset=[], className = '', style={} } ) => {
    const [defaultSrc, ...sources] = srcset;
    return (
        <picture>
            { (sources.length > 0) && sources.map(({ src, media, type }) => (
                <source key={src} srcSet={src} media={media} type={type} />
            ))}
            <img src={defaultSrc.src} className={ className } style={ style }/>
        </picture>
    );
};

export default ResponsiveImage;

