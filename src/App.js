// 필요한 모듈({..., ...}) 불러오기(import)
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MyButton from './MyButton';
import React, { useState } from 'react';

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    // 함수 컴포넌트(App())에서 state 변수(additio, multiple)와
    // state 변수를 수정할 수 있는 setter 함수(set~)를 설정하고
    // 초깃값을 지정함(useState(N))
    const [addition, setAddition] = useState(0);
    const [multiple, setMultiple] = useState(1);
    // onPress로 state를 수정하는 함수를 넘겨줌
    // state 가 변경 되어(set~) 화면이 리렌더링 됨
    // 텍스트 입력기(TextInput)에 값 변화가 일어날 때(onChange) 마다
    // 해당 변화 값(event)을 출력한다
    return (
        <View style={styles.container}>
            <TextInput
                onChange={event => console.log(event.nativeEvent.text)}
                style={styles.errorText}
            />
            {/* <Text style={{ fontSize: 20 }}>{addition}</Text>
            <Text style={{ fontSize: 20 }}>{multiple}</Text>
            <MyButton title="addition" onPress={() => setAddition(addition + 2)} />
            <MyButton title="multiple" onPress={() => setMultiple(multiple * 2)} /> */}
        </View>
    );
}

// 스타일 시트
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        backgroundColor: 'black',
        color: 'red',
        fontSize: 20
    }
});
