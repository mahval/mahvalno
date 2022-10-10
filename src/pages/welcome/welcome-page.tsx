import { Introduction } from '../../components/introduction/Introduction';
import { SeparatorSection } from '../../components/separator/SeparatorSection';
import { CenteredSectionContent, StyledSection } from '../../styled-components/sections';

export const WelcomePage = () => (
  <>
    <StyledSection>
      <CenteredSectionContent>
        <Introduction />
      </CenteredSectionContent>
    </StyledSection>
    <SeparatorSection />
  </>
);
