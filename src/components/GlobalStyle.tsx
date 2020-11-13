import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        box-sizing: border-box;
        font-family: 'Noto Sans TC', Helvetica, Arial, sans-serif;
        font-size: 17px;
        line-height: 1;
        letter-spacing: 0.3px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        font-family : inherit;
    }
    button {
        display: inline-block;
        border: none;
        margin: 0;
        cursor: pointer;
        text-align: center;
        
        :focus {
            outline: none;
        }
    }
    input:focus {
      outline: none;
    }
`;

export default GlobalStyle;
