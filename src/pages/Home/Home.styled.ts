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

export const Span = styled.span`
    color: #fa8072;
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

    button{
        width: 225px;

        background: none;
        color: #fa8072;
        
        border: 1px solid #fa8072;
        border-radius: 3px;

        cursor: pointer;

        padding: 16px 0px;

        font-size: 16px;
        font-weight: 600;

        background: linear-gradient(to left, transparent 50%, #fa8072 50%) right;
        background-size: 200%;
        transition: .3s ease-out;
    }

    button:hover{
        background-position: left;
        color: #282828;
    }
`

