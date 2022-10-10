import { SMALL_SPRITES } from '../../../sprite-resources/small-sprites';
import { StyledCategoryHeader } from '../../../styled-components/text';
import { Sprite } from '../Sprite';
import { StyledGalleryContainer } from '../styled-components';

const Gallery = () => (
  <StyledGalleryContainer>
    {SMALL_SPRITES.map((sprite) => (
      <Sprite key={sprite.imageUrl} sprite={sprite} />
    ))}
  </StyledGalleryContainer>
);

export const SmallSprites = () => (
  <>
    <StyledCategoryHeader>[ Små ]</StyledCategoryHeader>
    <Gallery />
  </>
);
