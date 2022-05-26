import styled, { keyframes } from "styled-components";

const rotater = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const NavbarSection = styled.nav`
    display: flex;
    justify-content: center;

    height: 100vh;

    background: #202020;
`

export const Logo = styled.div`
    margin-top: 64px;

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
    
    a{
        color: #fff;
        text-decoration: none;
    }

    li {
        padding: 16px 24px;

        border-radius: 3px;

        width: 150px;

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

    height: 60vh;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;

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