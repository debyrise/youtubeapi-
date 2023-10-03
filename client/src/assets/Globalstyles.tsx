import React from 'react'
import { Global, css } from "@emotion/react"


const GlobalStyles:React.FC = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Prompt:wght@500&family=Roboto:wght@400;500;700&display=swap");

        body {
            min-height: 100vh;
            background-color: #e3dada;
            color: white;
            margin: 0;
            padding: 0;
            font-family:  "Railway" sans-serif ;

        }
      `}
   />
  );
}

export default GlobalStyles