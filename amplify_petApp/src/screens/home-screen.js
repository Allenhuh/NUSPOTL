import React, {Component} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import styles from '../styling/HomeScreen';
import {API, graphqlOperation} from 'aws-amplify';
import { listPets } from '../../graphql/queries';

type Props = {};
export default class HomeScreen extends Component<Props> {
  state = { pets:[]}
  async componentDidMount(){
    const petData = await API.graphql(graphqlOperation(listPets))
    this.setState({pets: petData.data.listPets.items})
  }
render(){

  return (
    <>
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>HomePage</Text>
        </View>
        <View style={styles.inputContainer}> 
        {this.state.pets.map((pet, i) => 
            <Text style={styles.subtext} key= {i}>{pet.petName} {pet.petSpecies} {pet.petGender}
            </Text>
            )}
        </View>
      </SafeAreaView>
      </View>
    </>
   );
  }
}
