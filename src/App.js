// 필요한 모듈({..., ...}) 불러오기(import)
import { View } from 'react-native';
import React from 'react';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import Shadow from './Shadow';

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Shadow />
        </View>
    );
}
