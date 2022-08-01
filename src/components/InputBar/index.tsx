import { CreateButton } from '../CreateButton';
import { Input } from '../Input';
import * as S from './styled';

export const InputBar = () => {
    return (
        <S.InputBarContainer>
            <Input placeholder='Adicione uma nova tarefa' />
            <CreateButton label="Criar +" />
        </S.InputBarContainer> 
    );
};