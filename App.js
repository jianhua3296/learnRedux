import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Counter';
import {store } from './src/store/store';
import {Provider} from 'react-redux';


const App=(props) => {
  return (
  <Provider store={store}>
    <Counter />

  </Provider>
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


export default App;


