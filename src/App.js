// 필요한 모듈({..., ...}) 불러오기(import)
import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { styles } from './style';
import { StatusBar } from 'expo-status-bar';
import Box from './Box';

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Box style={{ backgroundColor: 'red', height: 100 }} />
            <Box style={{ backgroundColor: 'green', flex: 1 }} />
            <Box style={{ backgroundColor: 'blue', height: 100 }} />
        </View>
    );
}
