import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Projects = () => {
    return (
        <ProjectsGrid>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>
            <ProjectCard>
                <ProjectImage src="https://picsum.photos/200/300" alt="project image" />
                <ProjectTitle>Project Title</ProjectTitle>
                <ProjectDescription>Project Description</ProjectDescription>
                <ProjectLink href="#">Project Link</ProjectLink>
            </ProjectCard>           
        </ProjectsGrid>    
    )
}

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    height: auto;
    background-color: #f5f5f5;
`

const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
`

// create the styled component ProjectImage with a max width of 100% and a max height of 300px
const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
`

// create the styled component ProjectTitle with a text align of center and a font size of 1.5rem
const ProjectTitle = styled.h2`
    text-align: center;
    font-size: 1.5rem;
`

// create the styled component ProjectDescription with a text align of center and a font size of 1rem
const ProjectDescription = styled.p`
    text-align: center;
    font-size: 1rem;
`

// create the styled component ProjectLink with a text align of center and a font size of 1rem
const ProjectLink = styled.a`
    text-align: center;
    font-size: 1rem;
`

export default Projects;