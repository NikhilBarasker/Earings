import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Load>
        <div class="loader"></div>
    </Load>
  )
}

export default Loader

const Load = styled.div `
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%);

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: l1 1s infinite;
}
@keyframes l1 {to{transform: rotate(.5turn)}}
`;