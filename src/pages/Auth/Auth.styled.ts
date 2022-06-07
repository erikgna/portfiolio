import styled from "styled-components";

export const AuthPage = styled.div`
    width: 100%;
    min-height: 100vh;

    padding-left: 182px;
    padding-right: 32px;
    padding-bottom: 48px;

    background: #282828;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    h3{
        color: #fff;

        margin-bottom: 32px;
    }

    @media(max-width: 767px){
        padding-left: 16px;
        padding-right: 16px;
    }
`