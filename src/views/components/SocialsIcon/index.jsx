import { SocialData } from '../../../data/data'
import { SocialIconContainer, SocialLink } from './Social.styled'

const SocialsIcon = () => {
  return (
    <SocialIconContainer>
      {SocialData.map((social, index) => {
        return (
          <SocialLink
            key={index}
            href={social.path}
            target='_blank'
            rel='noopener noreferrer'
            newLabel={social.label}
          >
            <social.icon size={25} />
          </SocialLink>
        )
      })}
    </SocialIconContainer>
  )
}

export { SocialsIcon }
