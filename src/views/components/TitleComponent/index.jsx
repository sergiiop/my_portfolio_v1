import React from 'react'
import { Title } from './TitleComponent'

const TitleComponent = ({ children, area }) => {
  return <Title area={area}>{children}</Title>
}

export { TitleComponent }
