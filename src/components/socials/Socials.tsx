import styled from 'styled-components';
import GitLogo from '../../assets/social-logos/github.png';
import StackOverflowLogo from '../../assets/social-logos/stack-overflow.png';
import LinkedInLogo from '../../assets/social-logos/linkedin.png';

interface SocialItem {
  name: 'GitHub' | 'StackOverflow' | 'LinkedIn';
  url: string;
  imageUrl: string;
}

const socialItems: SocialItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/mahval',
    imageUrl: GitLogo,
  },
  {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/8670067/mahval',
    imageUrl: StackOverflowLogo,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mahval/',
    imageUrl: LinkedInLogo,
  },
];

const SocialButton = ({ name, url, imageUrl }: SocialItem) => (
  <SocialButtonContainer>
    <StyledSocialButton href={url} target="_blank">
      <LogoImage src={imageUrl} alt={name} />
    </StyledSocialButton>
  </SocialButtonContainer>
);

export const Socials = () => (
  <>
    {socialItems.map((item) => (
      <SocialButton key={item.name} {...item} />
    ))}
  </>
);

const StyledSocialButton = styled.a``;

const SocialButtonContainer = styled.div`
  margin: 0 14px;
`;

const LogoImage = styled.img`
  filter: drop-shadow(#ced479 -1px -1px 1px) drop-shadow(#ced479 1px 1px 1px);
  opacity: 0.5;
  transition: opacity 0.5s ease 0s;
  &:hover {
    opacity: 1;
  }
  @media only screen and (max-width: 600px) {
    max-width: 28px;
  }
`;
