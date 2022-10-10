import { Introduction } from '../../components/introduction/Introduction';
import { Separator } from '../../components/separator/Separator';
import { CenteredSectionContent, StyledSection } from '../../styled-components/sections';

export const WelcomePage = () => (
  <>
    <StyledSection>
      <CenteredSectionContent>
        <Introduction />
      </CenteredSectionContent>
    </StyledSection>
    <StyledSection>
      <CenteredSectionContent>
        <Separator />
      </CenteredSectionContent>
    </StyledSection>
  </>
);
