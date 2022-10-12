import { Project } from '../../projects/types';
import { FromToInfo } from './from-to-info/FromToInfo';
import { StyledExpandedContent, StyledProjectItem, ProjectItemDetails, StyledHeaderContent } from './styled-components';

interface ProjectItemProps {
  project: Project;
}

const ExpandedContent = ({ project }: ProjectItemProps) => (
  <StyledExpandedContent>
    <p>{project.projectName}</p>
  </StyledExpandedContent>
);

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
