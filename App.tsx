import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform, Image, TouchableWithoutFeedback } from 'react-native';
import { ToDo } from './components/toDo/toDo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDo/>
  
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    color: '#3b3b3b',
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 22
  },
  image: {
       width: '50%',
     resizeMode: 'contain'
     
  }
});
