import styled from "styled-components";

export const PostsStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    padding-top: 48px;
    padding-left: 48px;

    @media(max-width: 767px){
        flex-direction: column;

        padding-left: 0;

        padding-top: 64px;
    }
`

export const PostStyle = styled.div<{blue:boolean}>`
    width: 352px;

    display: flex;
    flex-direction: column;

    background: #202020;

    padding: 32px;
    margin-right: 32px;
    margin-bottom: 32px;

    border-radius: 6px;

    img{
        width: 100%;
        height: 100%;

        border-radius: 6px;
        box-shadow: 1px 1px 2px ${props => props.blue? '#fa8072' : '#bde7f5'};
    }

    h2{
        color: #fff;

        font-weight: 500;

        margin: 24px 0;
    }

    p{
        color: #cdcdcd;

        line-height: 1.5;

        &:first-child{
            margin-bottom: 8px;
            margin-top: 16px;
        }
    }

    strong{
        padding-top: 16px;
    }

    @media(max-width: 767px){
        margin-right: 0;
    }
`

export const PagesDiv = styled.div`
    /* position: static;
    bottom: 32px;
    left: calc(50% + 75px);
    transform: translate(-50%); */

    display: flex;
    align-self: center;

    margin-bottom: 48px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        height: 32px;
        padding: 0 12px;

        border: 1px solid #fa8072;
        border-radius: 3px;

        cursor: pointer;

        &:not(:last-child){
            margin-right: 16px;
        }
    }

    .active-page{
        background: #fa8072;
    }

    p{
        font-size: 16px;
        font-weight: 600;

        color: #fff;
    }
`

export const PostImage = styled.div`
    width: 100%;
    height: 280px;

    border-radius: 3px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`