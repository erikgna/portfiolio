import styled, { keyframes } from "styled-components";

const rotater = keyframes`
    0%{
        transform: translateY(0px);
    }
    40%{
        transform: translateY(0px) rotate(0deg);
    }
    50%{
        transform: translateY(-25px) rotate(180deg);
    }
    70%{
        transform: translateY(0px) rotate(360deg);
    }
    100%{
        transform: translateY(0px) rotate(360deg);
    }
`

export const HomeSection = styled.section`
    width: 100%;
    min-height: 100vh;

    padding-left: 150px;

    background: #282828;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 767px){
        flex-direction: column;
        justify-content: center;

        padding-left: 0;
    }
`

export const Span = styled.span`
    color: #fa8072;
`

export const DObject = styled.div`
    @media(max-width: 767px){
        display: none;
    }
`


export const InformationSection = styled.div`
    display: flex;
    flex-direction: column;

    align-self: center;

    padding-left: 48px;

    h1{
        font-size: 56px;

        color: #fff;
    }

    p{
        color: #D3D3D3;

        font-size: 16px;

        margin-top: 24px;
        margin-bottom: 48px;
    }

    span{
        position: relative;
        display: inline-block;
        animation-name: ${rotater};
        animation-iteration-count: infinite;
        animation-delay: 0;
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
    }

    @media(max-width: 767px){
        width: 100vw;
    }
`

