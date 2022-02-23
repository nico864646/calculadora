import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {  
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   body{
       display: flex;
       justify-content: center;
       align-items: center;
       height: 100vh;
       background-color: #838485;
       font: normal 16px "Roboto", sans-serif;
   }

   button{
       cursor: pointer;
       outline: none;
       border: none;
   }
`;