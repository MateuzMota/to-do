import * as S from './styled';

export const CreateButton: React.FC<{ label: string }> = ({ label }) => {
    return (
        <S.CreateButton type='button'>{label}</S.CreateButton>
    );
}