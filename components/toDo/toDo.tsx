import React, { FunctionComponent, useState } from "react";
import { View ,  StyleSheet, TextInput, Button} from "react-native";

export const ToDo : FunctionComponent = () => {

  const [data, setData] = useState<string[]>([]);

  const [taskText, setTaskText] = useState<string>('');


  
  const handleAddTask = () => {
    setData( prev => [...prev, taskText]);
    return setTaskText('');
  }
  
 return <View style={styles.container}> 
    <TextInput
        style={styles.input}
        defaultValue="You can type in me"
        onChangeText={setTaskText}
        value={taskText}
      />
      <Button
  onPress={handleAddTask}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
 </View>
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 20
    },
      input: {
          backgroundColor: '#fff',
          fontSize: 20,
          height: 40,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 8
      }
});