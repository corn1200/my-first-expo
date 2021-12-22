// 필요한 모듈({..., ...})을 불러오기(import)
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// 함수 컴포넌트 생성
// 클릭 시(onPress) 얼럿(alert)으로 텍스트 띄우기
const MyButton = () => {
    return (
        <TouchableOpacity onPress={() => alert('MyButton')}>
            <View style={{ backgroundColor: 'red', padding: 10 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>MyButton</Text>
            </View>
        </TouchableOpacity>
    );
};

// 함수 컴포넌트(MyButton) 호출(export)
export default MyButton;