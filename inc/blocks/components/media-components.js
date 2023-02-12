export const ImagePlaceholder = ( { children } ) => <div style={{ 
    position: "relative",
    width: "100%",
    paddingTop: "100%",
    backgroundColor: "#c8c8c8",
    backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" viewBox="0 0 20 20"%3E%3Cpath fill="rgba(0,0,0,0.3)" d="M2.25 1h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1zM17 17V3H3v14h14zM10 6c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2s2-.9 2-2zm3 5s0-6 3-6v10c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V8c2 0 3 4 3 4s1-3 3-3s3 2 3 2z"%2F%3E%3C%2Fsvg%3E')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%'
}}>
    { children }
</div>