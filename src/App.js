// 필요한 모듈({..., ...}) 불러오기(import)
import { StyleSheet, View } from 'react-native';
import MyButton from './MyButton';

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <View style={styles.container}>
            <MyButton />
            <MyButton title="MyButton 2" onPress={() => alert("2")}>
                MyButton3
            </MyButton>
            <MyButton>children</MyButton>
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
});
