// 필요한 모듈({..., ...}) 불러오기(import)
import React from 'react';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #e3e3e3;
    align-items: center;
    justify-content: center;
`;

const cssText = css`
    font-size: 20px;
    font-weight: 600;
`;

const StyledText = styled.Text`
    ${cssText}
    color: blue;
`;

const ErrorText = styled.Text`
    ${cssText}
    color: red;
`;

const StyledButton = styled.Button``;

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <Container>
            <StatusBar style='auto' />
            <StyledText style={{ color: 'red' }}>Styled components</StyledText>
            <ErrorText>Error !!</ErrorText>
            <StyledButton title="Styled" onPress={() => alert("styled !!")} />
        </Container>
    );
}
