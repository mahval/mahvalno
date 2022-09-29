import styled from 'styled-components';
import GitLogo from '../../assets/gitlogo.png';

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
    imageUrl: '',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mahval/',
    imageUrl: '',
  },
];

const SocialButton = ({ name, url, imageUrl }: SocialItem) => (
  <LOL>
    <StyledSocialButton href={url} target="_blank">
      <LogoImage src={imageUrl} alt={name} />
    </StyledSocialButton>
  </LOL>
);

export const Socials = () => (
  <>
    {socialItems.map((item) => (
      <SocialButton key={item.name} {...item} />
    ))}
  </>
);

const StyledSocialButton = styled.a``;

const LOL = styled.div`
  height: 64px;
  margin: 0 14px;
`;

const LogoImage = styled.img`
  filter: drop-shadow(#ced479 -1px -1px 2px) drop-shadow(#ced479 1px 1px 2px);
`;
