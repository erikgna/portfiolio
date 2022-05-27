import styled, { keyframes } from "styled-components";

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