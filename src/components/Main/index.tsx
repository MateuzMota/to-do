import { InputBar } from '../InputBar';
import { Body } from '../Body';
import * as S from './styled'

export const Main = () => {
    return (
        <S.MainContainer>
            <InputBar />
            <Body />
        </S.MainContainer>
    );
}