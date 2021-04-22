import React from 'react';
import {SafeAreaView, StatusBar, Text, View, Image} from 'react-native';
import styles from '../styling/AddPetScreen';

const AddPetScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
      <View style={styles.titleContainer}>
          <Text style={styles.title}>Upload Pets</Text>
        </View>
          <View style={styles.contentsContainer}>
              <View style={styles.roundImage}>
                <Image source={require('../../assets/corgi.png')}/> 
                <Text style={styles.roundImageText}>+ Pet Image</Text>
              </View>
          </View>
       </View>
    </>
  );
};

export default AddPetScreen;