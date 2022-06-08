import styled, { keyframes } from "styled-components";
import { Form } from "../../styles/Global.styled";
import { Description } from "../About/About.styled";

const jump = keyframes`
    0%{
        transform: scaleX(1) scaleY(1);
    }
    50%{
        transform: scaleX(.8) scaleY(.8);
    }
    100%{
        transform: scaleX(1) scaleY(1);
    }
`

export const ContactMeH3 = styled.h3`
    color: #fff;
        
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;

    margin-bottom: 48px;
`

export const ContactWays = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 32px;

    a{
        color: #fff;
        text-decoration: none;
    }

    div{
        display: flex;
        align-items: center;

        margin: 8px 0;

        :hover{
            svg{
                animation-name: ${jump};
                animation-duration: 1.2s;

                transition: 300ms ease-in;
            }
        }
    }

    svg{
        margin-right: 16px;

        font-size: 32px;

        color: #bde7f5;
    }
`

export const ContactPage = styled.section`
    width: 100%;
    min-height: 100vh;

    padding-left: 150px;
    padding-bottom: 40px;

    background: #282828;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    @media(max-width: 1067px){
        flex-direction: column;

        padding-left: 0;
    }
`

export const ContactDescription = styled(Description)`
    @media(max-width: 1067px){
        width: 100vw;

        padding-left: 182px;
    }

    @media(max-width: 767px){
        padding-right: 32px;
        padding-left: 32px;
    }
`

export const ContactForm = styled(Form)`
    @media(max-width: 1067px){
        max-width: 100vw;
        width: 100vw;

        padding-left: 182px;
    }
    @media(max-width: 767px){
        padding-left: 32px;
    }
`

export const ButtonError = styled.div`
    display: flex;
    flex-direction: column;

    align-items: flex-start;

    h5{
        font-size: 16px;

        margin-bottom: 24px;
    }
`