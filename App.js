import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/header';
import CarList from './components/carList';

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:0,
    margin:0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
