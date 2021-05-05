import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styling/HomeScreen';
import { API, autoShowTooltip, Storage, graphqlOperation } from 'aws-amplify';
import { listPets } from '../../graphql/queries';
import { ScrollView } from 'react-native';
import moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RefreshControl } from 'react-native';

export default class HomeScreen extends Component {
  state = { pets: [], refreshing: false }
  navigation;

  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.loadPets();
  }

  async componentDidMount() {
    // const petList = petData.data.listPets.items;
  }

  async loadPets() {
    const petData = await API.graphql(graphqlOperation(listPets));
    this.setState({ pets: petData.data.listPets.items });
  }

  buildLostPetList(petList) {
    return petList.map(e => this.buildLostPet(e));
  }

  buildLostPet(pet) {
    console.log(pet, 'pet');
    return (
      <View style={style.container} key={pet.id}>
        <View style={style.petImageView}>
          <Image
            style={style.petImage}
            source={require('../../assets/white_dog.jpeg')}
            // source={{ uri: pet.image }}
          />
        </View>
        <View style={style.petInfoCtn}>
          <View style={style.petInfo}>
            <Text style={style.name}>{pet.petName}</Text>
            <Text style={style.lastSeen}>Last seen {this.lastSeen(pet.createdAt)}</Text>
          </View>
          <View style={style.petInfo}>
            <Text style={style.other}>{pet.petSpecies}{this.getGender(pet.petGender)} {pet.petBreed}</Text>
          </View>
        </View>
      </View>)
  }

  reportLostPet() {
    this.navigation.navigate('ReportLostPets');
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
    const petList = this.buildLostPetList(this.state.pets);
    const { refreshing } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => this.loadPets()} />
        }>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Have you seen me?</Text>
          </View>
          <View style={[styles.inputContainer, style.list]}>
            {petList}
          </View>
          {/* </SafeAreaView> */}
        </ScrollView>

        <View style={style.floatButtonCtn}>
          <TouchableOpacity style={style.floatButton} onPress={() => this.reportLostPet()}>
            <Text style={{color: '#f9f9f9', fontWeight: 'bold', fontFamily: 'monospace'}}>Report Lost Pet</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  main: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
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
  },
  floatButtonCtn: {
    position: 'absolute',
    bottom: 10,
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  floatButton: {
    borderRadius: 20,
    backgroundColor: '#00ADB5',
    padding: 15,
    color: '#f9f9f9',
  }
});