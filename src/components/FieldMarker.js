import styled from 'styled-components'

const FieldMarker = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: lightblue;
  opacity: .5;
`

export default FieldMarker