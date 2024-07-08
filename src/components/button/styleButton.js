import styled from "styled-components";

export const GetInTouch = styled.button`
    width: 150px;
    height: 44px;
    border-radius: 100px;
    border: 3px solid #FF0013;
    background: transparent;
    color: ${props => props.theme.primaryTextColor};
    font-family: "Lexend Deca", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.04em;
    cursor: pointer;
`

export const KnowMe = styled.button`
    width: 245px;
    height: 64px;
    border-radius: 16px;
    border: none;
    padding: 22px 88px;
    background-color: #FF0013;
    color: #F8F6F9;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.04em;
    cursor: pointer;
`

export const Message = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 13px;
    background: #FF0013;
    border: none;
    box-shadow: #FF0013 0px 20px 40px -6px;
    cursor: pointer;
`

export const Submit = styled.button`
    width: 284px;
    height: 64px;
    border-radius: 16px;
    border: none;
    background-color: #FF0013;
    color: #F8F6F9;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.04em;
    cursor: pointer;
`