// 필요한 모듈({..., ...}) 불러오기(import)
import { View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';

const Container = styled.view`
    flex: 1;
    background-color: '#fff';
    align-items: 'center';
    justify-content: 'center';
`;

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <Container>
            <StatusBar style='auto' />
        </Container>
    );
}
