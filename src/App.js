// 필요한 모듈({..., ...}) 불러오기(import)
import React from 'react';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import Input from "./Input";

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.bgColor};
    align-items: center;
    justify-content: center;
`;

const lightTheme = {
    inputColor: '#111',
    inputBorder: '#111',
    bgColor: '#e3e3e3'
};

const darkTheme = {
    inputColor: '#e3e3e3',
    inputBorder: '#e3e3e3',
    bgColor: '#111'
};

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Container>
                <StatusBar style='auto' />
                <Input placeholder="Type a message..." />
                <Input />
            </Container>
        </ThemeProvider>
    );
}
