import styled from 'styled-components';

export const StyledSection = styled.section`
  width: 100%;
  margin-top: 128px;
  margin-bottom: 0px;
  padding: 0px 64px;
  @media only screen and (max-width: 600px) {
    margin-top: 75px;
    padding: 0 40px;
  }
  &:last-of-type {
    margin-bottom: 128px;
  }
`;

export const SectionContent = styled.div`
  max-width: 1312px;
  margin: 0px auto;
`;

export const CenteredSectionContent = styled(SectionContent)`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-flow: row wrap;
`;
