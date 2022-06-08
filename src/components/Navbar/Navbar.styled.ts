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

const slideNavbar = keyframes`
    0%{
        display: flex;
    }
    1%{
        left: 250px;
    }
    100%{
        left: -100px;
    }
`

export const NavbarSection = styled.nav`
    display: flex;
    justify-content: center;

    position: fixed;
    
    height: 100vh;

    background: #202020;

    .mobile-nav{
        display: none;
    }

    .menu{
        display: none;
    }

    @media(max-width: 767px){
        position: absolute;
        right: 24px;
        top: 0;

        background: none;
        
        height: 40px;

        cursor: pointer;

        .menu{
            display: block;
        }

        svg{
            margin-top: 16px;

            font-size: 32px;

            color: #fff;
        }

        .mobile-nav{
            display: none;
            flex-direction: column;

            position: absolute;

            left: 150px;

            width: 150px;
            height: 100vh;

            background: #202020;

            animation-delay: 0;
            animation-duration: .3s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;

            z-index: 99;

            ul{
                list-style: none;
            }

            svg{
                font-size: 32px;
                
                align-self: flex-end;
                
                margin-top: 16px;
                margin-bottom: 16px;
                margin-right: 8px;
            }
        }

        .animation{
            animation-name: ${slideNavbar};

            display: flex;
        }
    }
`

export const Logo = styled.div`
    margin-top: 64px;
    margin-bottom: 64px;

    display: flex;
    justify-content: center;

    cursor: pointer;

    animation: ${rotater} 10s linear infinite;

    transition: ease-in-out 300ms;

    h1{
        font-size: 32px;

        font-family: 'Kavoon', cursive;
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

    @media(max-width: 767px){
        display: none;
    }
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 48px;

    a{
        color: #fff;
        font-size: 28px;

        transition: ease-in 300ms;

        cursor: pointer;
    }

    a:hover{
        color: #fa8072;

        transform: scale(1.2);
    }

    a:first-child{
        margin-right: 16px;
    }
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
`