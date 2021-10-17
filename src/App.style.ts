import styled from "styled-components";


const primaryColor = "#EB6626";
const primaryLightColor = "#FF7E42";
const primaryDarkColor = "#9E3B0D";
const secondaryDarkColor = "#009E8E";
const secondaryLightColor = "#26EBD6";

export const Container = styled.div`
    display: flexbox;
    width: 70%;
    margin: auto;
    padding: 100px;
    justify-content: space-between;

    h1 {
        margin-top: 40px;
        font-size: 30px;
        font-weight: bold;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    div {
        min-width: 50%;
        padding: 0px 10px;
    }
`;

export const InputWrapper = styled.div`
    margin-bottom: 30px;
    display: flex;

    div {
        min-width: auto;
        padding: 0px;
    }

    label {
        font-size: 20px;
        font-weight: bold; 
    }

    input {
        font-size: 32px;
        font-weight: bolder; 
        display: block;
        width: 250px;
        border: none;
        padding: 10px 0px;
        margin: none;
        outline: none;
    }
`;

export const RoundButton = styled.button`
    padding: 10px;
    border-radius: 50%;
    background-color: ${secondaryDarkColor};
    border: none;
    outline: none;
    color: #ffffff;
    width: 50px;
    height: 50px;
    font-weight: bolder;
    font-size: 30px;
    text-align:center;
`;

export const Buttons = styled.div`
    margin-top: 20px;
    ${RoundButton} {
        &:first-child {
            margin-right: 10px
        }
    }
`;

export const BigNumber = styled.span`
    display: block;
    font-size: 60px;
    font-weight: bold;
    padding: 15px 0px;
    margin: 15px 0px;
    border-bottom: 4px solid ${secondaryDarkColor};
`
