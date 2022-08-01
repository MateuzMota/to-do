import * as S from './styled';

export const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
    return (
        <S.InputContainer>
            <S.Input type="text" placeholder={placeholder} />
        </S.InputContainer>
    );
}