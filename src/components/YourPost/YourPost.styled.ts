import styled from "styled-components";

export const YourPostStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: calc(50vw - 150px);

    margin-bottom: 48px;

    h5{
        color: #fff;

        font-size: 20px;
        font-weight: 500;

        margin-top: 24px;
        margin-bottom: 24px;
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

export const Image = styled.div`
    width: calc(50vw - 150px);
    height: 280px;

    border-radius: 3px;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`