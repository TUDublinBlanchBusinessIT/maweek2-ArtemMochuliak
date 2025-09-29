import React, { useState } from 'react';
import {StyleSheet,  Text, View , TextInput} from 'react-native';



export default function App() {
  const [fullname, setFullname] = useState("Artem Mochuliak");
  return (
   <View style={styles.container}>
      <Text style={styles.paragraph}>Hello, World {fullname}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={text => setFullname(text)}
        value={fullname}
      />
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
    
  container: {
    padding: 24,
  },
    
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },  
});

