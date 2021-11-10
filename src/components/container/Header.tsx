import React from 'react';
import styled from 'styled-components';

import Logo from '../styled/Logo';
import { ThemeToggle } from '../styled/ThemeToggle';
import SearchBar from '../styled/SearchBar';

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
                <SearchBar />
                <ThemeToggle onThemeToggleChange={onThemeChange}/>
            </div>
        </StyledHeader>
    );
}
