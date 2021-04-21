import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

const SettingScreen = (props) => {
  return (
    <>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>Setting</Text>
      </SafeAreaView>
      </View>
    </>
  );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9F9F9',
    }
  });

export default SettingScreen;