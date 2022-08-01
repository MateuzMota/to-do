import styled from "styled-components";

interface TasksCounterPropsStyle {
    color: string;
}

export const TasksCounterContainer = styled.div`
    display: flex;
    gap: 8px;
`;

export const CounterLabel = styled.strong<TasksCounterPropsStyle>`
    color: ${({ color }) => color === "purple" ? "var(--purple-light)" : "var(--blue-light)"};
    font-size: 0.875rem;
`;

export const Counter = styled.p`
    color: var(--gray-100);
    background-color: var(--gray-400);
    padding: 0 10px;
    border-radius: 42%;
    font-size: 0.75rem;

`;