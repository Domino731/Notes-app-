import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} numberOfLines={2}> Merry xmas </Text>

      <TouchableWithoutFeedback onPress={() => console.log('Santa :)')}>
         <Image style={styles.image} source={require('./assets/santa-claus.png')}/>
        </TouchableWithoutFeedback>  
    
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    color: '#fff',
    backgroundColor: 'dodgerblue',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
