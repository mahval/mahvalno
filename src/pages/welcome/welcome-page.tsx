import React from 'react';
import { Introduction } from '../../components/introduction/Introduction';
import { Separator } from '../../components/separator/Separator';
import { CenteredSectionContent, StyledSection } from '../../styled-components/sections';

export const WelcomePage = () => (
  <div>
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
  </div>
);
