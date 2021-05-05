import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styling/HomeScreen';
import { API, autoShowTooltip, Storage, graphqlOperation } from 'aws-amplify';
import { getPet, listPets } from '../../graphql/queries';
import { ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

export default class SearchResultScreen extends Component {
	state = { searchTags: [], tagsId: [], pet: null }
	navigation;

	constructor(props) {
		super(props);
		this.navigation = this.props.navigation;
	}

	async componentDidMount() {
		const petData = await API.graphql(graphqlOperation(getPet, { id: "6756f26d-d41c-41b0-94ba-d570e9b951f1" }));
		console.log(petData, 1111);
		this.setState({ pet: petData.data.getPet, searchTags: this.props.route.params["searchTags"] });
	}

	preBuildSelectedOptions() {
		return this.state.searchTags.map(e => {
			return this.buildSelectedOptions(e);
		});
	}

	buildSelectedOptions(tag) {
		return (
			<View key={tag} style={style.tagCtn}>
				<Text style={style.tagText}>{tag}</Text>
			</View>
		)
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
		const selected = this.preBuildSelectedOptions();
		const { pet } = this.state;
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.inputContainer}>
						<Text style={styles.title}>Search results</Text>
						<View style={style.searchTags}>
							{selected}
						</View>
					</View>
						{pet && <View style={style.container}>
							<View style={style.petImageView}>
								<Image
									style={style.petImage}
									source={require('../../assets/white_dog.jpeg')}
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
						</View>}
				</ScrollView>

			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		// display: 'flex',
		// flex: 1,
		// borderRadius: 5,
		// width: '100%',
		// justifyContent: 'center',
		// alignItems: 'center',
		
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
	innerContainer: { 
		backgroundColor: 'red',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	searchTags: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		marginVertical: 10,
		flexWrap: 'wrap'
	},
	tagCtn: {
		display: 'flex',
		margin: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: 'orange',
		padding: 5,
		paddingHorizontal: 8
	},
	tagText: {
		fontSize: 12,
		color: '#000'
	},
	
  container2: {
    // display: 'flex',
    // flex: 1,
    // borderRadius: 5,
    // padding: 10,
    // width: '80%',
    // marginHorizontal: '10%',
    // marginBottom: '5%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white'
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
    // width: '95%',
    // height: 'auto',
    // minHeight: 150,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#d9d9d9'
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
});