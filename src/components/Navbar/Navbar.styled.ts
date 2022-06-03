import styled, { keyframes } from "styled-components";

const rotater = keyframes`
    0%{
        transform: rotate(0deg) scale(1);
    }
    50%{
        transform: rotate(180deg) scale(1.5);
    }
    100%{
        transform: rotate(360deg) scale(1);
    }
`

export const NavbarSection = styled.nav`
    display: flex;
    justify-content: center;

    position: fixed;
    
    height: 100vh;

    background: #202020;
`

export const Logo = styled.div`
    margin-top: 64px;
    margin-bottom: 64px;

    display: flex;
    justify-content: center;

    cursor: pointer;

    animation: ${rotater} 10s linear infinite;

    transition: ease-in-out 300ms;

    svg{
        font-size: 48px;
    }

    &:hover{
        color: #fa8072;
    }
` 

export const Links = styled.ul`
    display: flex;
    flex-direction: column;

    list-style: none;

    margin-bottom: 32px;

    .li-active{
        border-left: 3px solid salmon;
    }

    li{
        display: flex;
    }

    a {
        color: #fff;
        text-decoration: none;

        padding: 16px 24px;

        border-radius: 3px;

        min-width: 150px;

        font-size: 16px;
        font-weight: 600;
        text-align: center;

        cursor: pointer;

        transition: ease-in 300ms;
        
        &:hover{
            background: #fa807230;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    color: #fff;

    height: 70vh;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 48px;

    svg{
        color: #fff;
        font-size: 28px;

        transition: ease-in 300ms;

        cursor: pointer;
    }

    svg:hover{
        color: #fa8072;

        transform: scale(1.2);
    }

    svg:first-child{
        margin-right: 16px;
    }
`