import styled from "styled-components";

export const Form = styled.form`
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 40px;

        input {
            width: 80%;
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
    `;

export const ErrorSpan = styled.span`
    font-size: 20px;
    color: #ff2020;
    margin-bottom: 10px;
`
