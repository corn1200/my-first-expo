// 필요한 모듈({..., ...}) 불러오기(import)
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// 화면에 띄워줄 컴포넌트 return()
export default function App() {
  console.log('React Native App');
  return (
    <View style={styles.container}>
      <Text>Hi, Kim</Text>
      <StatusBar style="auto" />
      <Button title='Button' onPress={() => alert('Click!!')}></Button>
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
