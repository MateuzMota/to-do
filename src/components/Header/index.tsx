import * as S from './styled';
import Logo from '../../assets/logo.svg'

export const Header = () => {
    return (
        <S.HeaderContainer>
            <img src={Logo} width="126px" height="48px" alt="todo" />
        </S.HeaderContainer>
    );
}