import {createGlobalStyle} from "styled-components"

export const LayoutGlobal = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+SC:400,600,700%7Csans-serif');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px'Noto Sans SC', sans-serif;
        background: #f9f9f9;
        --webkit-font-smoothing: antialiased;
    }

    input, button,textarea {
        font: 400 18px 'Noto Sans SC', sans-serif;
    }

    a{
        text-decoration: none;
        display: inherit;
    }

    a:active{
        color: #212529;
    }

    button {
        cursor: pointer;
    }

    input{
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }
`;