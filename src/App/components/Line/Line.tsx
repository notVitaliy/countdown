import styled from 'styled-components'

interface Props {
  // prettier-ignore
  top: number;
  // prettier-ignore
  time: number;
}

const BaseLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background: blue;
  transform: rotate(1deg);
  mix-blend-mode: screen;
  -webkit-filter: blur(1px);
  -moz-filter: blur(1px);
  filter: blur(1px);
  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    mix-blend-mode: screen;
  }
  &:after {
    top: 2px;
    background: red;
  }
  &:before {
    top: -2px;
    background: limegreen;
  }
`

export const Line = styled(BaseLine)<Props>`
  top: ${(props) => props.top}px;
  animation: lines ${(props) => props.time}s infinite;
`
