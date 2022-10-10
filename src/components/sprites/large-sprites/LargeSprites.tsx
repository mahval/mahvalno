import { LARGE_SPRITES } from '../../../sprite-resources/large-sprites';
import { StyledCategoryHeader } from '../../../styled-components/text';
import { Sprite } from '../Sprite';
import { StyledGalleryContainer } from '../styled-components';

const Gallery = () => (
  <StyledGalleryContainer>
    {LARGE_SPRITES.map((sprite) => (
      <Sprite key={sprite.imageUrl} sprite={sprite} />
    ))}
  </StyledGalleryContainer>
);

export const LargeSprites = () => (
  <>
    <StyledCategoryHeader>[ Store ]</StyledCategoryHeader>
    <Gallery />
  </>
);
