import styled from 'styled-components';

export const StyledIntroductionContent = styled.div`
  display: block;
`;

export const LogoAndName = styled.div`
  margin: 0px auto;
  text-align: center;
`;

export const Logo = styled.div`
  margin: 0px auto;
  text-align: center;
`;

export const LogoImage = styled.img`
  max-width: 300px;
  filter: drop-shadow(#ffb845 -1px -1px 2px) drop-shadow(#ffb845 1px 1px 2px);
  @media only screen and (max-width: 600px) {
    max-width: 200px;
  }
`;

export const Name = styled.div`
  margin: 0px auto;
  text-align: center;
`;

export const ContactInfo = styled(LogoAndName)``;

export const SocialsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
export const Workplace = styled.div``;
