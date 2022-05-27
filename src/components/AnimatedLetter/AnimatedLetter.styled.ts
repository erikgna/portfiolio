import styled, { keyframes } from "styled-components";

const rescale = keyframes`
    0%{
        transform: scaleY(1) scaleX(1);
        transform: scaleX(1);
    }
    50%{
        transform: scaleY(1.5) scaleX(.55);
    }
    100%{
        transform: scaleY(1) scaleX(1);
    }
`

export const Special = styled.span`
    position: relative;
    display: inline-block;

    animation-duration: .6s;
    animation-iteration-count: initial;
    animation-name: ${rescale};
`

export const Static = styled.span`
    position: relative;
    display: inline-block;
`

export const AnimatedH2 = styled.h2`
    font-size: 48px;
    line-height: 1.1;

    color: #bde7f5;

    margin-bottom: 48px;
`