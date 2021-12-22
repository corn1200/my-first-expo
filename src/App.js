// 필요한 모듈({..., ...}) 불러오기(import)
import { StyleSheet, View } from 'react-native';
import MyButton from './MyButton';

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
    return (
        <View style={styles.container}>
            <MyButton title="MyButton 1" onPress={() => alert("1")} />
            <MyButton title="MyButton 2" onPress={() => alert("2")} />
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
