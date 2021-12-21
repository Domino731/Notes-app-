import React, { FunctionComponent, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text
} from "react-native";

export const ToDo: FunctionComponent = () => {
  const [data, setData] = useState<string[]>([]);

  const [taskText, setTaskText] = useState<string>("");

  const [flag, setFlag] = useState<boolean>(false);

  const handleAddTask = () => {
    setData((prev) => [...prev, taskText]);
    return setTaskText("");
  };

  const handleSetTaskText = (data: string) => {
    data.length > 0 ? setFlag(true) : setFlag(false) ;
    return setTaskText(data);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        defaultValue="You can type in me"
        onChangeText={handleSetTaskText}
        value={taskText}
      />
      {flag && <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add new task</Text>
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 20,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  button: {
    marginTop: 12,
    width: '100%',
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#f72585',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  }
});
