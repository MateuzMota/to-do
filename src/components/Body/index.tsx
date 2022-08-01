import { TasksCounter } from '../TasksCounter';
import * as S from './styled'

export const Body = () => {
    return (
        <S.BodyContainer>
            <S.TasksCounterContainer>
                <TasksCounter color="purple" label='Tarefas criadas' totalTasks={0} />
                <TasksCounter color='blue' label='Concluídas' completedTasks={0} totalTasks={0} />
            </S.TasksCounterContainer>
        </S.BodyContainer>
    );
}