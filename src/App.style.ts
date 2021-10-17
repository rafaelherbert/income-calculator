import styled from "styled-components";


const primaryColor = "#EB6626";
const primaryLightColor = "#FF7E42";
const primaryDarkColor = "#9E3B0D";
const secondaryDarkColor = "#009E8E";
const secondaryLightColor = "#26EBD6";

export const Left = styled.div`
    padding: 30px;
    width: 50%;
    min-width: 300px;
`;

export const Right = styled.div`
    padding: 30px;
    width: 50%;
    min-width: 300px;
    padding-top: 80px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 50px;
    flex-wrap: wrap;
    width: 100%;

    h1 {
        font-size: 30px;
        font-weight: bold;
    }

    h2 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        padding: 40px 20px;
        ${Left}, ${Right} {
            padding: 0px;
            width: 100%;
        }
    }
`;

export const InputWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin-right: 20px;

    label {
        font-size: 20px;
        font-weight: bold; 
    }

    input {
        display: block;
        width: 100%;
        font-size: 32px;
        font-weight: bolder; 
        border: none;
        padding: 10px 0px;
        margin: none;
        outline: none;
    }
`;

export const ControllWrapper = styled.div`
    margin-bottom: 30px;
    display: flex;
    padding: 10px 0px;
    justify-content: space-between;
`;

export const RoundButton = styled.button`
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
    cursor: pointer;
`;

export const Buttons = styled.div`
    display: inline-flex;
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
