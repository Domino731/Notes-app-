import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

export const ToDo: FunctionComponent = () => {
  const [data, setData] = useState<string[]>([]);

  const [taskText, setTaskText] = useState<string>("");

  const [flag, setFlag] = useState<boolean>(false);

  // checking if the new task text length is greater than 0
  useEffect(() => {
    return  taskText.length > 0 ? setFlag(true) : setFlag(false);
  }, [taskText]);

  /** add new task to the data state and clear taskText state */
  const handleAddTask = useCallback(() => {

        setData((prev) => [...prev, taskText]);
       return setTaskText('');
  }, [taskText]);


  return (
    <View style={styles.container}>
      <Text>{taskText}</Text>
      <TextInput
        style={styles.input}
        defaultValue="You can type in me"
        onChangeText={setTaskText}
        value={taskText}
      />
      {flag && (
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>Add new task</Text>
        </TouchableOpacity>
      )}

      <View style={styles.tasksList}>
               {data.map((data, index) => <View key={index}>
                <TouchableOpacity>
                   <Text>Add new task</Text>
                </TouchableOpacity>
                 <Text style={styles.listItem}>{data}</Text>
               </View>)}
      </View>
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
    width: "100%",
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: "#f72585",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  tasksList: {
    marginTop: 10
  },
  listItem: {
     color: '#fff'
  }
});
