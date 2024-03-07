import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Bio } from '../../data/constants';
import { BuiltBy, Copyright, FooterContainer, FooterWrapper, Logo, SocialMediaIcon, SocialMediaIcons } from './FooterStyles';


function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <BuiltBy>Built by:</BuiltBy>
        <Logo>Gundeep Singh Saluja</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Gundeep Singh Saluja. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;