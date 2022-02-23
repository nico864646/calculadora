import styled from "styled-components"

export const Calculator = styled.div`
    width: 325px;
    height: 500px;
    background-color: #070707;
    overflow: hidden;
    border-radius: 15px;
`;

export const Display = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5px;
    color: #ffffff;
    font-size: 2rem;
    background-color: #1f1f1f;
    overflow: hidden;

    button{
        width: 80px;
        height: 50px;
        display: flex;
        justify-self: flex-end;
        align-self: flex-start ;
        border-radius: 15px;
    }
`;

export const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: repeat(4, 88px);
    grid-gap: 2px;
    background-color: #bab6b7;
`;
