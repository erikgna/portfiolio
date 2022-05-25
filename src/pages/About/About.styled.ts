import { motion } from 'framer-motion';
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

export const ProgressBarStyles = styled(motion.div)<{size:number}>`
    border-radius: 3px;
    border: 1px solid salmon;
    width: calc(100vw/3.5);
    height: 16px;
    background: linear-gradient(to left, transparent 50%, salmon 50%) right;
    background-size: ${(props) => props.size}%;
    transition: 1.2s ease-out;

    &:hover{
        background-position: left;
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

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    color: #fff;

    padding-left: 48px;
    padding-right: 128px;

    h2{
        font-size: 48px;
        line-height: 1.1;

        color: #bde7f5;

        margin-bottom: 48px;
    }

    p{
        font-size: 16px;
        line-height: 1.35;

        a{
            color: #bde7f5;

            cursor: pointer;

            text-decoration: none;
        }

        a:hover{
            transition: 300ms ease-in;
            
            opacity: .65;
        }
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    padding-right: 48px;

    h3{
        color: #fff;

        font-size: 16px;

        margin-top: 24px;
        margin-bottom: 8px;
    }
`