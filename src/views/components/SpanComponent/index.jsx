import { Title } from './SpanComponent.styled'

const SpanComponent = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

export { SpanComponent }
