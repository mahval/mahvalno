import styled from 'styled-components';

export const StyledLogoContainer = styled.a`
  color: rgb(229, 225, 230);
  position: relative;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  gap: 16px;
  @media only screen and (max-width: 600px) {
    gap: 4px;
  }
`;

export const StyledHeaderSection = styled.header`
  margin-top: 2rem;
  width: 100%;
  margin-bottom: 0px;
  padding: 0px 64px;
`;

export const HeaderSectionContent = styled.div`
  margin: 40px auto 0px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  max-width: 1312px;
`;

export const StyledLogo = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const StyledLogoImage = styled.img`
  max-width: 100%;
`;

export const StyledNavigation = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 24px;
`;
