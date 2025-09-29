import {StyleSheet,  Text, View } from 'react-native';



export default function App() {
  return (
    <View>
      <Text style={styles.paragraph}>Hello, World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

