import styled from "styled-components";

export const PostsStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    padding-top: 48px;
    padding-left: 48px;
    padding-right: 48px;
`

export const PostStyle = styled.div<{blue:boolean}>`
    max-width: 440px;
    min-width: 352px;

    display: flex;
    flex-direction: column;

    background: #202020;

    padding: 40px;
    margin-right: 48px;
    margin-bottom: 48px;

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
`