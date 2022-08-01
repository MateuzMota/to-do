import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
`;

export const Input = styled.input`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    background-color: var(--gray-500);
    color: var(--gray-100);
    border: none;
    outline: none;
    box-shadow: none;
    
    &:focus {
        border: 1px solid var(--purple-dark);
    }
`;

