import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import {Button, Answer, Wrong} from './source/myButton'
//import PageTest from './source/PageTest'
import Page from './source/PageLoader'


export default function App() {
  return (
    <View>
      <Page/>
      <StatusBar style="auto" />
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
