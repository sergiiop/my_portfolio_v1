import { SourceLink } from './SourceComponent.styled'
import { GoLink, GoRepo } from 'react-icons/go'

export const SourceComponent = ({ href, icon }) => {
  return (
    <SourceLink href={href} target='_blank'>
      {icon === 'github' ? <GoRepo /> : <GoLink />}
    </SourceLink>
  )
}
