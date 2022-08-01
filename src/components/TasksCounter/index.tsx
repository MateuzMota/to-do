import * as S from './styled'

interface TasksCounterProps {
    color: string;
    label: string;
    totalTasks?: number;
    completedTasks?: number;
}

export const TasksCounter: React.FC<TasksCounterProps> = ({ color, label, totalTasks, completedTasks }) => {
    return (
        <S.TasksCounterContainer>
            <S.CounterLabel color={color}>{label}</S.CounterLabel>
            <S.Counter>{completedTasks ? completedTasks : totalTasks}</S.Counter>
        </S.TasksCounterContainer>
    );
}