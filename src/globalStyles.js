import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*  {
    box-sizing: border-box;
    overscroll-behavior: none;
    margin: 0;
    padding: 0;
}
:root {

    //===== orange ======//


    --orange-one: #D87D4A;
    --orange-two: #FBAF85;

    //==== black ====//
    --black-one: #000000;
    --black-two: #101010;

    //=== white ===//
    --white-one: #ffffff;
    --white-two: #FAFAFA;
    --white-three: #f1f1f1;
    
    //=== transparent ===//
    --transparent: transparent;

    //=== display ===//
    --width: 100vw;
    --max-width: 88vw;
    --height: 100%;
    --defaultFontSize: 87.5%;
    --borderRadius-one: 8px;
}
body {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    margin: 0;
    padding: 0;
    min-width: auto;
    min-height: 100vh;

}

//=== Global Styles ===//

html {
  font-size: var(--defaultFontSize);
  width: auto;
}
@media only screen and (min-width: 576px) {
  :root {
    --defaultFontSize: 100%;
  }
}

.main-page { 
  min-width: 100vw;
  margin: 0 auto;

}

h1{
    font-weight: 700;
    font-size: 56px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 58px;
}
h2{
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    line-height: 44px;
}
h3{
    font-weight: 700;
    font-size: 32px;
    letter-spacing: 1.15px;
    text-transform: uppercase;
    line-height: 36px;
}
h4{
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 38px;
}
h5{
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    line-height: 33px;
}
h6{
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    line-height: 24px;
}
.sub-title {
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1px;
    line-height: 25px;
}
p {
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1.0px;
    text-transform: uppercase;
    /* line-height: 1.9px; */
}

.orange-btn {
    background: var(--orange-one);
    color: var(--white-one);
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    :hover {
        background: var(--orange-two);
    }
}
.transparent-btn {
    background: var(--transparent);
    border: 2px solid var(--black-one);
    color: var(--black-one);
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    :hover {
        background: var(--black-two);
        color: var(--white-one);
    }
}
.black-btn {
    background: var(--black-two);
    color: var(--white-one);
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    :hover {
        color: var(--black-one);
        background: var(--transparent);
        border: 2px solid var(--black-one);
    }
}
.link {
    text-decoration: none;
}
.image-card {
    height: 400px;
    width: 400px;
}
`
