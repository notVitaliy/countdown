import { createGlobalStyle } from 'styled-components'

export const GlobalFonts = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
  }

  @font-face {
    font-family: 'Alarm Clock';
    src: url('./countdown/fonts/alarm-clock.woff2') format('woff2'), 
      url('./countdown/fonts/alarm-clock.woff') format('woff')
  }

  @keyframes lines {
    0% { 
      opacity: 0;
    }
    50%  {
      opacity: .7;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
