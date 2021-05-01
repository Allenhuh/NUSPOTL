import React, { useState } from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styles from '../styling/FaqScreen';

const FaqScreen = (props) => {
  return (
    <>

    <View style={styles.container}>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>1. Question: What to do when your pet is missing?</Text>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>Answer: Apart from reporting in the app, remember to report to SPCA and AVA</Text>
    </View>

    <View style={styles.container}>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>2. Question: What to do when you found a missing pet?</Text>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>Answer: Apart from informing it\'s owner about it, remember to informing to SPCA and AVA</Text>
    </View>

    <View style={styles.container}>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>3. Question: What to do when you found a missing pet?</Text>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>Answer: Apart from reporting in the app, remember to check with SPCA and AVA if the owner has called to file a lost pet</Text>
    </View>

    <View style={styles.container}>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>4. Question: Who is the most awesome person?</Text>
    <Text style={{textAlignVertical:"top", textAlign:"auto",}}>Answer: You. For helping the society and fur babies.</Text>
    </View>

    </>
  );

};



export default FaqScreen;