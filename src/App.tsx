
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { Theme, lightTheme, darkTheme } from './styles/theme';

import { Header } from './components/container/Header';
import { Home } from './components/container/Home';
import Home from './components/container/Home';
import PageOne from './components/container/PageOne';
import PageTwo from './components/container/PageTwo';
import Footer from './components/container/Footer';


export default function App() {
    
    const [theme, setTheme] = useState<Theme>(lightTheme);
    
    const updateTheme = (isDarkTheme: boolean) => {
        setTheme((isDarkTheme ? darkTheme : lightTheme));
    }
        
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Router>
                    <Header onThemeChange={updateTheme}/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path={'/one'} element={<PageOne/>} />
                        <Route path={'/two'} element={<PageTwo/>} />
                        <Route element={<Home/>} />
                    </Routes>
                    <Footer />
                </Router>
            </>
        </ThemeProvider>
    );
}
