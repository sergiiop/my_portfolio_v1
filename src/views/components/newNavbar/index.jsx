import CustomLink from '../CustomLink'
import { NavbarIconData } from '../../../data/data'
import { NavMenuContainer } from './newNavbar.styled'

const NewNavbar = () => {
  return (
    <NavMenuContainer>
      {NavbarIconData.map((icon, index) => {
        return (
          <CustomLink labelData={icon.label} key={index} to={icon.path}>
            <icon.icon className='icon' />
          </CustomLink>
        )
      })}
    </NavMenuContainer>
  )
}
export { NewNavbar }
