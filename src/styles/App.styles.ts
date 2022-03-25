import styled, { createGlobalStyle } from "styled-components";
import BG_IMG from "../images/bg-img.jpeg";

export const GlobalStyle = createGlobalStyle`
    *,
    *:after,
    *:before {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
        height: 100%;
    }

    body {
        background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${BG_IMG});
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
        background-repeat: no-repeat;
        min-height: 100vh;
        width: 100%;
        font-family: "Poppins", sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p,
  .score {
    color: whitesmoke;
  }

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Fascinate Inline", cursive;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 60px;
    text-align: center;
    font-weight: 400;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
      max-width: 200px;
  }
`;
