import styled from 'styled-components';

import Logo from '../styled/Logo';
import NavBar from '../styled/NavBar';
import { ThemeToggle } from '../styled/ThemeToggle';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    div {
        display: flex;
    }
`;

type Props = {
    onThemeChange: (e: boolean) => void,
}

export const Header: React.FC<Props> = ({onThemeChange}) => {
    return (
        <StyledHeader>
            <Logo />
            <div>
                <NavBar />
                <ThemeToggle onThemeToggleChange={onThemeChange}/>
            </div>
        </StyledHeader>
    );
}
