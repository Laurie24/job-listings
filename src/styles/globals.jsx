import styled, { createGlobalStyle } from 'styled-components'
import { lightColors, primaryColors } from './theme.jsx'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${primaryColors.blue};
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
    width: 100%;
    font-size: 15px;
    background-color: ${lightColors.primary};
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ul, li {
    list-style-type: none;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, textarea, button {
    font-family: inherit
  }
`
export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 767px) {
        max-width: 90vw;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        max-width: 768px;
    }

    @media (min-width: 1024px) {
        max-width: 1200px;
    }
`
