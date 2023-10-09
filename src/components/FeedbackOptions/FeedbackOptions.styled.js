import styled from "styled-components"

export const Btn = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 5px;
  background-color: white;
  color: palevioletred;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    color: white;
    background-color: rebeccapurple;
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`