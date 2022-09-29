import React from 'react';
import { Introduction } from '../../components/introduction/Introduction';
import { CenteredSectionContent, StyledSection } from '../../styled-components/sections';

export const WelcomePage = () => (
  <StyledSection>
    <CenteredSectionContent>
      <Introduction />
    </CenteredSectionContent>
  </StyledSection>
);
