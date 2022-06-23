import styled from 'styled-components'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 528px) {
    display: block;
  }
  & button {
    margin-right: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background: var(--color-background);
    color: var(--color-sec);
    border: 2px solid var(--color-sec);
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 528px) {
      font-size: 1rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    @media screen and (min-width: 528px) {
      min-width: 5rem;
    }
  }

  & button.active {
    background: var(--color-sec);
    color: var(--color-background);
    border: 2px solid var(--color-sec);
  }
`
