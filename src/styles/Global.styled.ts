import styled from 'styled-components';

export const FlexPrincipal = styled.section<{alignCenter:boolean}>`
    width: 100%;
    min-height: 100vh;

    padding-left: 150px;
    padding-bottom: 40px;

    background: #282828;

    display: flex;
    justify-content: center;
    align-items: ${props => props.alignCenter&& 'center'};

    @media(max-width: 767px){
        flex-direction: column;

        padding-left: 0;
    }
`

export const Button = styled.button<{width:number}>`
    width: ${props => props.width}px;

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

    &:hover{
        background-position: left;
        color: #282828;
    }

    @media(max-width: 767px){
        width: 190px;
    }

    @media(max-width: 450px){
        width: 150px;
    }
`

export const ButtonBlue = styled(Button)`
    color: #bde7f5;

    border: 1px solid #bde7f5;

    background: linear-gradient(to left, transparent 50%, #bde7f5 50%) right;
    background-size: 200%;
    transition: .3s ease-out;
`

export const Input = styled.input`
    border: none;

    outline: none;

    background: #4c4c4c;
    color: #cdcdcd;

    font-size: 16px;

    padding: 12px;

    background-repeat: no-repeat;
    background-size: 
        0,
        0,
        100% 3px,
        0;
    
    background-position: 0, 0, -1000px 100%, 0;
    
    background-image: 
        linear-gradient(0deg, #fa8072, #fa8072),
        linear-gradient(0deg, #fa8072, #fa8072),
        linear-gradient(0deg, #fa8072, #fa8072),
        linear-gradient(0deg, #fa8072, #fa8072);
    
    transition: all 0.5s ease;
    transition-property: background-size, background-position;

    &:focus{
        background-position: 0, 0, 0 100%, 0;
        background-size: 0 0, 0 0, 100% 2px, 0;
    }

    
    &#name{
        width: calc(50% - 8px);
    }

    &#email{
        width: calc(50% - 8px);

        margin-left: 16px;
    }

    &#subject{
        margin: 16px 0;
    }
    
    &::placeholder{
        color: #cdcdcd;
    }
`

export const TextArea = styled.textarea`
    border: none;
    
    resize: none;

    outline: none;

    background: #4c4c4c;
    color: #cdcdcd;

    font-size: 16px;

    padding: 16px;
    margin-bottom: 32px;

    background-repeat: no-repeat;
    background-size: 
        0,
        0,
        100% 3px,
        0;
    
    background-position: 0, 0, -1000px 100%, 0;
    
    background-image: 
        linear-gradient(0deg, #fa8072, #fa8072),
        linear-gradient(0deg, #fa8072, #fa8072),
        linear-gradient(0deg, #fa8072, #fa8072),
        linear-gradient(0deg, #fa8072, #fa8072);
    
    transition: all 0.5s ease;
    transition-property: background-size, background-position;

    &:focus{
        background-position: 0, 0, 0 100%, 0;
        background-size: 0 0, 0 0, 100% 2px, 0;
    }

    &::placeholder{
        color: #cdcdcd;
    }
`

export const Form = styled.form`
    max-width: 700px;

    display: flex;
    flex-direction: column;
    
    margin-top: 48px;

    @media(max-width: 767px){
        padding-left: 0;
        padding-right: 0;
    }
`

//#fa8072 salmon
//#bde7f5 blue