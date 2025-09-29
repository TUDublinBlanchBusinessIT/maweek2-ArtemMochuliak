import React, { useState } from 'react';
import {StyleSheet,  Text, View } from 'react-native';



export default function App() {
  const [fullname, setFullname] = useState("Artem Mochuliak");
  return (
    <View>
      <Text style={styles.paragraph}>Hello, World {fullname}</Text>
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

