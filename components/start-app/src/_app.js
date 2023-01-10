import "../styles/index.scss";  // Import the stylesheet
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {default as FrontPage} from "./pages/index"
import {default as AboutPage} from "./pages/about"
import {default as ContactPage} from "./pages/contact"
import {default as TermsPage} from "./pages/terms"
import {default as ArchivePage} from "./pages/archive"
import {default as PostPage} from "./pages/post"
import {default as ProjectPage} from "./pages/project"
import {default as ProjectsPage} from "./pages/projects"
import {default as NotFoundPage} from "./pages/404"

const root = document.querySelector('[wpchunk-start-app]')

root && render( <React.StrictMode>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/:slug" element={<NotFoundPage />} />
                <Route path="/post/:slug" element={<PostPage />} />
                <Route path="/project/:slug" element={<ProjectPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/archive/:slug" element={<ArchivePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsPage />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>, root );