import { Project } from '../../../projects/types';
import { prettifyToYear } from '../../../utils/date-utils';
import { StyledFromToInfo } from '../styled-components';

interface FromToInfoProps {
  project: Project;
}

export const FromToInfo = ({ project }: FromToInfoProps) => {
  const fromYear = prettifyToYear(project.from);
  const toYear = prettifyToYear(project.to);

  if (fromYear === null) {
    return null;
  }

  const getFromToString = () => {
    if (project.currentProject) {
      return `[ ${fromYear}\u2013 ]`;
    }
    if (toYear === null) {
      `[ ${fromYear} ]`;
    }
    return `[ ${fromYear}\u2013${toYear} ]`;
  };

  return <StyledFromToInfo>{getFromToString()}</StyledFromToInfo>;
};
