import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
