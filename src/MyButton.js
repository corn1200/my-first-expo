// 필요한 모듈({..., ...})을 불러오기(import)
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

// 함수 컴포넌트 생성
// 클릭 시(onPress) 얼럿(alert)으로 텍스트 띄우기
// 버튼 근처 클릭 시(hitSlop)에도 버튼 클릭 처리 가능
// 버튼 클릭 도중 외부로 나올 경우(pressRetentionOffset) 버튼 클릭 취소 가능
const MyButton = () => {
    return (
        <TouchableOpacity
            onPress={() => alert('MyButton')}
            hitSlop={{ bottom: 100, top: 100, left: 100, right: 100 }}
            pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
        >
            <View style={{ backgroundColor: 'red', padding: 10 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>MyButton</Text>
            </View>
        </TouchableOpacity>
    );
};

// 함수 컴포넌트(MyButton) 호출(export)
export default MyButton;