import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';
import DocScanner from './components/DocScanner'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// export default function App() {
//   return (
//       <HomePage/>
//   );
// }



const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Picture" component={docScanner} />
    </Tab.Navigator>
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
