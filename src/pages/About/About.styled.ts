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
`

export const Description = styled.div`
    width: calc(50vw - 75px);

    display: flex;
    flex-direction: column;

    color: #fff;

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
`