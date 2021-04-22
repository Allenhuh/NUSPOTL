import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styles from '../styling/FaqScreen';

const FaqScreen = (props) => {
  return (
    <>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>FAQ</Text>
      </SafeAreaView>
      </View>
    </>
  );

};

export default FaqScreen;