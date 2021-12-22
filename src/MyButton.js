// 필요한 모듈({..., ...})을 불러오기(import)
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// 함수 컴포넌트 생성
// 부모(props)의 클릭(onPress)과 텍스트 이름(title)을 지정한다
const MyButton = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
        >
            <View style={{ backgroundColor: 'red', padding: 10, margin: 10 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

// 함수 컴포넌트(MyButton) 호출(export)
export default MyButton;