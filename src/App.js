// 필요한 모듈({..., ...}) 불러오기(import)
import React from 'react';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import styled, { css } from 'styled-components/native';
import Input from "./Input";

const Container = styled.View`
    flex: 1;
    background-color: #e3e3e3;
    align-items: center;
    justify-content: center;
`;

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <Container>
            <StatusBar style='auto' />
            <Input></Input>
        </Container>
    );
}
