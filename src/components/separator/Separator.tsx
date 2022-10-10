import styled from 'styled-components';

const StyledGlitterWrapper = styled.div`
  display: flex;
  gap: 4px;
  height: 4px;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 20%;
`;

const StyledGlitter = styled.div`
  background: rgb(229, 225, 230);
  height: 100%;
`;

const StyledGlitterShort = styled(StyledGlitter)`
  width: 10%;
`;

const StyledGlitterLong = styled(StyledGlitter)`
  width: 33%;
`;

const StyledLineLeft = styled.div`
  align-self: flex-end;
  background: rgb(229, 225, 230);
  height: 1px;
  width: 50%;
`;

const StyledLineMiddleContainer = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;
  width: 16px;
`;

const StyledLineMiddle = styled.div`
  background: rgb(229, 225, 230);
  height: 1px;
  position: absolute;
  transform: rotate(-45deg);
  width: 22px;
`;

const StyledLineRight = styled.div`
  align-self: flex-start;
  background: rgb(229, 225, 230);
  height: 1px;
  width: 50%;
`;

const StyledSeparator = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 16px;
  position: relative;
  width: 100%;
  filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
  margin-top: 0px;
  margin-bottom: 64px;
`;

export const Separator = () => (
  <StyledSeparator>
    <StyledGlitterWrapper>
      <StyledGlitterShort />
      <StyledGlitterShort />
      <StyledGlitterShort />
      <StyledGlitterLong />
    </StyledGlitterWrapper>
    <StyledLineLeft />
    <StyledLineMiddleContainer>
      <StyledLineMiddle />
    </StyledLineMiddleContainer>
    <StyledLineRight />
  </StyledSeparator>
);
