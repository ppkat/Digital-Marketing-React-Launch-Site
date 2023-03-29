import styled from "styled-components";

const Form = styled.form`
        width: 80%;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 40px;

        .textInput {
            width: 100%;
            height: 80px;
            background-color: white;
            padding: 20px;
            font-size: 1em;
            border-radius: 20px;
            color: black;
            margin-bottom: 10px;
            @media (max-width : 800px) {
                text-align: center;
                font-size: 0.5em;
            }
        }
`
export default Form

export const ErrorSpan = styled.span`
    font-size: 20px;
    color: #ff2020;
    margin-bottom: 10px;
`

export const EmailsAdvertising = styled.span`
    font-size: max(0.7vw, 7px);
    text-align: justify;
    display: flex;
    flex-direction: column;

    span {
        margin: 5px 0;
        font-size: max(1vw, 10px);
        display: flex;
        align-items: center;

        input {
            margin-right: min(0.8vw, 10px);
        }
    }
`
