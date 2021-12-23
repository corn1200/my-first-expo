// 필요한 모듈({..., ...})을 불러오기(import)
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from 'prop-types';

// 함수 컴포넌트 생성
// 부모(props)의 클릭(onPress)과 텍스트 이름(title)을 지정한다
const MyButton = ({ title, onPress, children, title2 }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            pressRetentionOffset={{ bottom: 10, top: 10, left: 10, right: 10 }}
        >
            <View style={{ backgroundColor: 'red', padding: 10, margin: 10 }}>
                <Text style={{ fontSize: 20, color: 'white' }}>
                    {children || title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

// 기본 생성자에 넘겨 줄 값을 오브젝트 형태로 설정
MyButton.defaultProps = {
    title: 'default',
    onPress: () => alert('default')
};

// 생성자에 넘겨질 값 중 title은 반드시 문자열(title: PropTypes.string)이도록,
// onPress는 반드시 함수(onPress: PropTypes.func)이도록 설정
// title2는 반드시 문자열이어야 하며 반드시 
// 넘어와야 한다(title2: PropTypes.string.isRequired)
MyButton.PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    title2: PropTypes.string.isRequired
}

// 함수 컴포넌트(MyButton) 호출(export)
export default MyButton;