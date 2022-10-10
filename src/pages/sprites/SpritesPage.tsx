import { Separator } from '../../components/separator/Separator';
import { LargeSprites } from '../../components/sprites/large-sprites/LargeSprites';
import { SmallSprites } from '../../components/sprites/small-sprites/SmallSprites';
import { SectionContent, StyledSection } from '../../styled-components/sections';
import { StyledMasterHeader } from '../../styled-components/text';

export const SpritesPage = () => (
  <>
    <StyledSection>
      <SectionContent>
        <StyledMasterHeader>Sprites</StyledMasterHeader>
        <Separator />
      </SectionContent>
    </StyledSection>

    <StyledSection>
      <SectionContent>
        <LargeSprites />
      </SectionContent>
    </StyledSection>

    <StyledSection>
      <SectionContent>
        <SmallSprites />
      </SectionContent>
    </StyledSection>
  </>
);
