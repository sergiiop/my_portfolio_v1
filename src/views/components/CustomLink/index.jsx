import { NavItem, CustomNavLink } from './CustomLink.element'

const CustomLink = props => {
  return (
    <NavItem newLabel={props.labelData}>
      <CustomNavLink exact='true' to={props.to}>
        {props.children}
      </CustomNavLink>
    </NavItem>
  )
}

export default CustomLink
