import { motion } from 'framer-motion';
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
    100% {
      opacity: 1;
      filter: blur(0);
    }
`

export const Span = styled.span<{duration: number}>`

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

export const Teste = styled(motion.div)`
    background: red;
    width: 80px;
    height: 90px;
`