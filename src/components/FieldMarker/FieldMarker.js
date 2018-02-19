import styled, { css } from 'styled-components'

const FieldMarker = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: lightblue;
  opacity: .5;
  visibility: ${props => props.isDragging ? 'hidden' : 'visible'};

  ${props => props.selected && css`
    outline: 1px solid darkblue;
  `}
`

export default FieldMarker
