import { SocialData } from '../../../data/data'
import { SocialIconContainer, SocialIconsContainer } from './Social.styled'

const SocialsIcon = () => {
  return (
    <SocialIconsContainer>
      {SocialData.map((social, index) => {
        return (
          <SocialIconContainer key={index}>
            <a href={social.url} target='_blank' rel='noopener noreferrer'>
              {social.label}
              <social.icon size={25} />
            </a>
          </SocialIconContainer>
        )
      })}
    </SocialIconsContainer>
  )
}

export { SocialsIcon }
