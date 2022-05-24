import styled from "styled-components";

export const NavbarSection = styled.nav`
    display: flex;
    flex-direction: column;

    align-items: center;

    height: 100vh;

    background: #202020;
    color: white;
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;

    list-style: none;

    margin-bottom: 32px;

    li {
        border-bottom: 1px solid white;
        padding: 8px 24px;

        text-align: center;

        cursor: pointer;
    }
`