import React from 'react';
import {
  StyledIntroductionContent,
  LogoAndNameContainer,
  LogoContainer,
  NameContainer,
  StyledLogo,
} from './styled-components';
import SimpleCat from '../../assets/simple-cat.png';
import { StyledMasterHeader } from '../../styled-components/text';

export const Introduction = () => {
  const NAME = 'Marianne Hval';

  return (
    <StyledIntroductionContent>
      <LogoAndNameContainer>
        <LogoContainer>
          <StyledLogo src={SimpleCat} />
        </LogoContainer>
        <NameContainer>
          <StyledMasterHeader>{NAME}</StyledMasterHeader>
        </NameContainer>
      </LogoAndNameContainer>
    </StyledIntroductionContent>
  );
};
