import React from 'react';
import { PROJECTS } from '../../projects/projects';
import { StyledMasterHeader, StyledParagraph } from '../../styled-components/text';
import { ProjectItem } from '../project-item/ProjectItem';

const IntroductionText = () => (
  <div>
    <StyledParagraph>
      I am a full stack developer with a specialty in frontend development. My qualifications include a Bachelor&apos;s
      degree in Informatics: Programming and Network from our own University of Oslo as well as multiple years in the
      tech industry and my own personal projects. Right now I work as a consultant in bspoke developing exciting new
      technical solutions for many industries.
    </StyledParagraph>
    <StyledParagraph>
      With bspoke I have become highly skilled in frontend frameworks and Typescript, using these to develop a variety
      of different pieces of software, including but not limited to: Websites, web portals, CRMs, application forms, and
      case handling systems. With this many varied projects I have also developed my skills at all stages of software
      development including testing, compliance and debugging.
    </StyledParagraph>
    <StyledParagraph>You can find some of my earlier projects below.</StyledParagraph>
  </div>
);

export const WorkExperience = () => (
  <>
    <StyledMasterHeader>Experience</StyledMasterHeader>
    <IntroductionText />
    {PROJECTS.map((project) => (
      <ProjectItem key={project.customerName} project={project} />
    ))}
  </>
);
