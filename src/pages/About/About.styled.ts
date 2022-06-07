import { motion } from 'framer-motion';
import styled from "styled-components";

export const ProgressBarStyles = styled(motion.div)<{size:number}>`
    border-radius: 3px;
    border: 1px solid salmon;
    width: calc(50vw/2);
    height: 16px;
    background: linear-gradient(to left, transparent 50%, salmon 50%) right;
    background-size: ${(props) => props.size}%;
    transition: 1.2s ease-out;

    &:hover{
        background-position: left;
    }

    @media(max-width: 767px){
        width: 100%;
    }
`

export const Description = styled.div`
    width: calc(50vw - 75px);

    display: flex;
    flex-direction: column;

    color: #fff;

    padding-top: 32px;
    padding-left: 48px;
    padding-right: 128px;

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

    @media(max-width: 767px){
        width: 100vw;

        padding-right: 16px;
        padding-left: 16px;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;

    padding-right: 48px;
    padding-bottom: 64px;

    h3{
        color: #fff;

        font-size: 16px;

        margin-top: 24px;
        margin-bottom: 8px;
    }

    @media(max-width: 767px){
        width: 100%;

        margin-top: 48px;

        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 0;
    }
`