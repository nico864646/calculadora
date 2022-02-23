import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #FFFFFF;
    background-color: #060606;

    &:hover{
        background-color: #4b565c;
    }

    &.operator{
        background-color: #131313;
    }
    
    &.equals{
        background-color: #1c253b;
    }
`;
