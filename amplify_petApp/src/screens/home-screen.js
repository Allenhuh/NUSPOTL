import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import styles from '../styling/HomeScreen';
import { API, autoShowTooltip, DataStore, graphqlOperation } from 'aws-amplify';
import { listPets } from '../../graphql/queries';
import { ScrollView } from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends Component {
  state = { pets: [] }

  async componentDidMount() {
    const petData = await API.graphql(graphqlOperation(listPets))
    const petList = petData.data.listPets.items;
    this.setState({ pets: petData.data.listPets.items })
  }

  buildLostPetList(petList) {
    return petList.map(e => this.buildLostPet(e));
  }

  buildLostPet(pet) {
    return (<View style={style.container} key={pet.id}>
      <View style={style.petImageView}>
        <Text style={style.petImage}>Pet Image</Text>
      </View>
      <View style={style.petInfoCtn}>
        <View style={style.petInfo}>
          <Text style={style.name}>{pet.petName}</Text>
          <Text style={style.lastSeen}>Last seen {this.lastSeen(pet.createdAt)}</Text>
        </View>
        <View style={style.petInfo}>
          <Text style={style.other}>{pet.petSpecies}{this.getGender(pet.petGender)} (breed)</Text>
        </View>
      </View>
    </View>)
  }

  getGender(gender) {
    switch (gender) {
      case 'Male':
        return <MaterialCommunityIcons name="gender-male" color={'blue'} size={10} />;
      case 'Female':
        return <MaterialCommunityIcons name="gender-female" color={'pink'} size={10} />;
      default:
        return <MaterialCommunityIcons name="gender-male-female-variant" color={'black'} size={10} />;
    }
  }

  lastSeen(lastSeenDateTime) {
    try {
      const now = moment();
      const lastSeen = moment(lastSeenDateTime);

      let diff = now.diff(lastSeen, 'days');
      if (diff < 1) {
        diff = now.diff(lastSeen, 'hours');
        if (diff < 1) {
          return '<1 hr';
        } else {
          return `${diff} hr`
        }
      } else {
        return `${diff} d`
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const petList = this.buildLostPetList(this.state.pets)
    return (
      <>
        <ScrollView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Have you seen me?</Text>
            </View>
            <View style={[styles.inputContainer, style.list]}>
              {petList}
              {/* {this.state.pets.map((pet, i) =>
                <Text style={styles.subtext} key={i}>{pet.petName} {pet.petSpecies} {pet.petGender}
                </Text>
              )} */}
            </View>
          </SafeAreaView>
        </ScrollView>
      </>
    );
  }
}

const style = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginHorizontal: '10%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  name: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  lastSeen: {
    fontSize: 12,
    color: 'gray',
  },
  other: {
    fontSize: 12,
    color: 'black',
  },
  test: {
    backgroundColor: 'blue'
  },
  petImageView: {
    width: '95%',
    height: 'auto',
    minHeight: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9'
  },
  petImage: {
    fontSize: 50,
  },
  petInfoCtn: {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  petInfo: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});