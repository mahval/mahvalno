import {
  StyledIntroductionContent,
  LogoAndName,
  Logo,
  Name,
  LogoImage,
  ContactInfo,
  SocialsContainer,
  Workplace,
} from './styled-components';
import SimpleCat from '../../assets/simple-cat.png';
import { StyledMasterHeader, StyledParagraph } from '../../styled-components/text';
import { Socials } from '../socials/Socials';

export const Introduction = () => {
  const NAME = 'Marianne Hval';

  return (
    <StyledIntroductionContent>
      <LogoAndName>
        <Logo>
          <LogoImage src={SimpleCat} />
        </Logo>
        <Name>
          <StyledMasterHeader>{NAME}</StyledMasterHeader>
        </Name>
      </LogoAndName>
      <ContactInfo>
        <SocialsContainer>
          <Socials />
        </SocialsContainer>
        <Workplace>
          <StyledParagraph>
            Currently working at{' '}
            <a href="https://www.bspoke.no/" target="_blank" rel="noreferrer">
              Norway&#39;s best place to work
            </a>
          </StyledParagraph>
        </Workplace>
      </ContactInfo>
    </StyledIntroductionContent>
  );
};
