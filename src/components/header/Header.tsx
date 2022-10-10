import SimpleCat from '../../assets/simple-cat.png';
import {
  StyledLogoContainer,
  StyledLogo,
  StyledLogoImage,
  StyledHeaderSection,
  HeaderSectionContent,
  StyledNavigation,
} from './styled-components';

const LogoContainer = () => (
  <StyledLogoContainer href="/">
    <StyledLogo>
      <StyledLogoImage src={SimpleCat} />
    </StyledLogo>
    <p>mahval</p>
  </StyledLogoContainer>
);

const Navigation = () => (
  <StyledNavigation>
    <a href="/sprites/">Sprites</a>
  </StyledNavigation>
);

export const Header = () => (
  <>
    <StyledHeaderSection>
      <HeaderSectionContent>
        <LogoContainer />
        <Navigation></Navigation>
      </HeaderSectionContent>
    </StyledHeaderSection>
  </>
);
