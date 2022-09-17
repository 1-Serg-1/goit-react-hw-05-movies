import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
   font-family: Roboto, sans-serif;
   padding-right: 20px;
   padding-left: 20px;
   color: ${p => p.theme.colors.black};
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
}
h2 {
   font-size: ${p => p.theme.fontSizes.l};
}
h3 {
   font-size: ${p => p.theme.fontSizes.m};
}

 ul {
    margin: 0;
   //  list-style: none;
 }
 li {
   padding-top: 5px;
   padding-bottom: 5px;
 }
//  img {
//    display: block;
//  }
 button {
   cursor: pointer;
   transition: all 200ms linear;
   &:hover, &:focus {
      background-color: blue;
      color: white;
   }
 }

 .shadow--header {
   box-shadow: 
   0px 2px 10px rgba(0, 0, 0, 0.12),
    0px 5px 10px rgba(0, 0, 0, 0.12),
    0px 10px 10px rgba(0, 0, 0, 0.16);
 }

 .shadow {
   box-shadow: 
   0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 5px 5px rgba(0, 0, 0, 0.12),
    0px 10px 8px rgba(0, 0, 0, 0.16);
 }
`;
