import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FirstContainer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  text-align: center;
  & > p {
    margin-top: 10px;
  }
  @media screen and (max-width: 820px) {
    padding: 0;
  }
`

export const Span = styled.span`
  color: red;
`
