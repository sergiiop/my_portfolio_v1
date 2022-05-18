import styled from 'styled-components'

export const FilterContainer = styled.div`
  margin-bottom: 50px;
  & button {
    margin-right: 2rem;
    min-width: 5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    background: white;
    color: rgb(65, 98, 168);
    border: 2px solid rgb(65, 98, 168);
    font-weight: bold;
    cursor: pointer;
  }

  & button.active {
    background: rgb(65, 98, 168);
    color: white;
  }
`
