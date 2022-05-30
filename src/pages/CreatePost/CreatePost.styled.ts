import styled from "styled-components";

export const CreatePostStyle = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding-right: 48px;
    padding-bottom: 64px;

    width: 100%;

    h3{
        color: #fff;
        
        font-weight: 500;
        font-size: 24px;
        line-height: 1.5;

        margin-bottom: 48px;
    }

    form:first-child{
        width: calc(50% - 75px);
    }
    form:last-child{
        width: calc(50% - 75px);
    }
`

export const ColInput = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;

    label{
        color: #fff;

        font-size: 16px;
        font-weight: 600;

        margin-bottom: 8px;
    }
`

export const InputImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    color: #bde7f5;

    border: 1px solid #bde7f5;
    border-radius: 3px;

    cursor: pointer;

    padding: 16px 0px;
    margin-bottom: 32px;

    font-size: 16px;
    font-weight: 600;

    background: linear-gradient(to left, transparent 50%, #bde7f5 50%) right;
    background-size: 200%;
    transition: .3s ease-out;

    &:hover{
        background-position: left;
        color: #282828;
    }

    input{
        position: fixed;
        opacity: 0;

        cursor: pointer;
    }
`

export const YourPosts = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 64px;
    margin-left: 48px;

    height: 100vh;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }
`