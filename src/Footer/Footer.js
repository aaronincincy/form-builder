import styled from 'styled-components'

const Button = styled.button`
  border-radius: 5px;
  border: 2px raised gray;
  padding: 10px 30px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;

  &:hover {
    background: white;
    transition: background 100ms;
  }

  &:focus {
    outline: none;
  }
`

const Footer = styled.footer`
  background: black;
  padding: 20px;
  text-align:right;
`

Footer.displayName = 'Footer'
Footer.Button = Button

export default Footer