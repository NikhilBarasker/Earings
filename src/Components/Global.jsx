import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-italiana: Italiana;
--font-inria-serif: 'Inria Serif';
--font-inter: Inter;

/* font sizes */
--font-size-3xs: 10px;
--font-size-lg: 18px;

/* Colors */
--color-aquamarine: #a2ffd3;
--color-dimgray: #5d5c5c;
--color-whitesmoke: #f0f0f0;
--color-lightpink-100: #ff9cb7;
--color-lightpink-200: #dea5b0;
--color-gainsboro: #e4e4e4;

/* Border radiuses */
--br-5xs: 8px;
--br-smi: 13px;

}
`;