import styled from 'styled-components';

export const CreateButton = styled.button`
    width: 90px;
    height: 100%;
    border-radius: 8px;
    background-color: var(--blue-dark);
    color: var(--gray-100);
    cursor: pointer;

    &:hover {
        background-color: var(--blue-light);
    }
`;