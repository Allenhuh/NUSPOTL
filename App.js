import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import { withAuthenticator } from 'aws-amplify-react-native';


function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
export default withAuthenticator(App);


