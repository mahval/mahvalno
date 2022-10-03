import styled from 'styled-components';

export const StyledParagraph = styled.p`
  margin: 32px 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #e5e1e6;
  opacity: 0.75;
`;

export const StyledMasterHeader = styled.h1`
  margin: 16px 0 32px 0px;
  font-weight: bold;
  font-size: 60px;
  line-height: 100%;
  color: #e5e1e6;
  @media only screen and (max-width: 600px) {
    font-size: 40px;
  }
`;
