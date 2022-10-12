import React from 'react';
import { Project } from '../../projects/types';
import { StyledCategoryHeader } from '../../styled-components/text';
import { prettifyToMonthYear } from '../../utils/date-utils';
import { StyledExpandedContent, StyledProjectItem, ProjectItemDetails, StyledHeaderContent } from './styled-components';

interface ProjectItemProps {
  project: Project;
}

const ExpandedContent = ({ project }: ProjectItemProps) => (
  <StyledExpandedContent>
    <p>{project.projectName}</p>
  </StyledExpandedContent>
);

const FromToInfo = ({ project }: ProjectItemProps) => {
  const from = prettifyToMonthYear(project.from);
  const to = prettifyToMonthYear(project.to);

  console.log('from:', from);

  if (from === null) {
    return null;
  }

  const fromToString = to === null ? `[ ${from}&ndash; ]` : `[ ${from}\u2013${to} ]`;

  return <StyledCategoryHeader>{fromToString}</StyledCategoryHeader>;
};

const HeaderContent = ({ project }: ProjectItemProps) => (
  <StyledHeaderContent>
    <FromToInfo project={project} />
  </StyledHeaderContent>
);

export const ProjectItem = ({ project }: ProjectItemProps) => (
  <StyledProjectItem>
    <ProjectItemDetails>
      <HeaderContent project={project} />
      <ExpandedContent project={project} />
    </ProjectItemDetails>
  </StyledProjectItem>
);
