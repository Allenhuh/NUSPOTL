import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const AddPetScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>Post Missing Pet</Text>
      </SafeAreaView>
    </>
  );
};

export default AddPetScreen;