import styled from 'styled-components';
import { StyledSpriteContainer, StyledSpriteText } from './styled-components';
import { SpriteProps } from './types';

const StyledSpriteImage = styled.img`
  max-width: 100%;
  filter: drop-shadow(#ffb845 -1px -1px 2px) drop-shadow(#ffb845 1px 1px 2px);
`;

export const Sprite = ({ sprite }: SpriteProps) => (
  <StyledSpriteContainer href={sprite.imageUrl} target="_blank">
    <StyledSpriteImage src={sprite.imageUrl} />
    {sprite.name && <StyledSpriteText>{sprite.name}</StyledSpriteText>}
  </StyledSpriteContainer>
);
