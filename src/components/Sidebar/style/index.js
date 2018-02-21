import { css } from "styled-components";

export const hoverHighlight = css`
  color: #b4b4b4;
  text-shadow: 0px 1px 2px black;

  &:hover {
    color: #ddd;
    transition: color 100ms;
  }
`