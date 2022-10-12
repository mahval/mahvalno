import { Introduction } from '../../components/introduction/Introduction';
import { SeparatorSection } from '../../components/separator/SeparatorSection';
import { WorkExperience } from '../../components/work-experience/WorkExperience';
import { CenteredSectionContent, SectionContent, StyledSection } from '../../styled-components/sections';

export const WelcomePage = () => (
  <>
    <StyledSection>
      <CenteredSectionContent>
        <Introduction />
      </CenteredSectionContent>
    </StyledSection>
    <SeparatorSection />
    <StyledSection>
      <SectionContent>
        <WorkExperience />
      </SectionContent>
    </StyledSection>
  </>
);
