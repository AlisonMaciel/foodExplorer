import {keyframes, styled} from "styled-components"

const loading = keyframes`
  to {
    transform: rotate(360deg);
  }
` 

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    height: 3.37rem;
    width: 3.37rem;
    border: 8px solid #dddddd;
    border-top-color: rgb(255, 0, 157);
    border-radius: 50%;
    animation: ${loading} 1s linear infinite;
  }
`

