import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styles from '../styling/HomeScreen';

const HomeScreen = (props) => {
  return (
    <>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>HomePage</Text>
        </View>
      </SafeAreaView>
      </View>
    </>
  );

};

export default HomeScreen;