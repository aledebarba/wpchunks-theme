import "../styles/index.scss";  // Import the stylesheet
import { useState } from "react";
import { useSettings } from "./components/useHooks";
import { render } from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {default as FrontPage} from "./pages/index"
import {default as AboutPage} from "./pages/about"
import {default as ContactPage} from "./pages/contact"
import {default as TermsPage} from "./pages/terms"
import {default as ArchivePage} from "./pages/archive"
import {default as PostPage} from "./pages/post"
import {default as ProjectPage} from "./pages/project"
import {default as ProjectsPage} from "./pages/projects"
import {default as NotFoundPage} from "./pages/404"
import {default as BrandLab} from "./pages/brandlab"

const root = document.querySelector('[wpchunk-start-app]')

const MainApp = () => { 
  const [ loaded, setLoaded ] = useState(false)
  
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
                <Route path="/" element={<FrontPage loaded={loaded} setLoaded={setLoaded}/> } />
                <Route path="/:slug" element={<NotFoundPage />} />
                <Route path="/post/:slug" element={<PostPage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/archive/:slug" element={<ArchivePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/brandlab" element={<BrandLab />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsPage />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode> 
  )};

root && render( <MainApp/>, root );

