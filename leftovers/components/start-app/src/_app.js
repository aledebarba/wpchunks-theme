import "../styles/index.scss";  // Import the stylesheet
import React, { useState } from "react";
import { render } from "react-dom";
import { useSettings } from "./components/useHooks";
import { Helmet } from "react-helmet";
import { _app } from "./wpchunk";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {default as FrontPage} from "./pages/index"
import {default as ArchivePage} from "./pages/archive"
import {default as PostPage} from "./pages/post"
import {default as NotFoundPage} from "./pages/404"


const MainApp = () => { 

  const [ loaded, setLoaded ] = useState(false)
  const pages = _app.pages();
  let pagesModules = [];

  pages.forEach( (page) => {
    pagesModules.push(
      { 
        Page: React.lazy( () => { 
          return import(`./pages/${page.slug}`).then( (module) => {
            return module;
          }).catch( (err) => {
            return import(`./pages/404`);
          }) }), 
        path: `/${page.slug}`
      }
    );
  });  
  

  return (
    <React.StrictMode>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={useSettings.description} />
        <meta name="keywords" content={useSettings.seoKeywords} />
        <meta property="og:title" content={ useSettings['og:title'] } />
        <meta property="og:description" content={ useSettings['og:description'] } />
        <meta property="og:image" content={ useSettings['og:image'] } />
        <meta property="og:image:alt" content={ useSettings['og:image:alt'] } />
        <meta property="og:url" content={ useSettings['og:url'] } />
        <title>{ useSettings.pageTitle }</title>
      </Helmet>
          <BrowserRouter>
            <Routes>
              <Route path="/:slug" element={<NotFoundPage />} />
              <Route path="/post/:slug" element={<PostPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path="/archive/:slug" element={<ArchivePage />} />
              <Route path="/" element={<FrontPage loaded={loaded} setLoaded={setLoaded}/> } />
              { pagesModules.map( (Module) => 
                { 
                  return <Route 
                    path={Module.path} 
                    key={Module.path} 
                    element={<React.Suspense fallback={<h1>Loading</h1>} >
                                <Module.Page />
                            </React.Suspense>}
                  />
                })}
            </Routes>
        </BrowserRouter>
  </React.StrictMode> 
  )};

  const root = document.querySelector('[wpchunk-start-app]');
  

root && render( <MainApp/>, root );

