import React, { useState } from 'react';
import { TextInput, StatusBar, Text, View, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styling/AddPetScreen';
import { API, graphqlOperation } from 'aws-amplify';
import { createPet } from '../../graphql/mutations';
import ImagePicker from 'react-native-image-crop-picker';
import { Storage } from 'aws-amplify';
import { StyleSheet } from 'react-native';

export default function ReportPetScreen({ updateAuthState, navigation }) {
	const [petName, setPetName] = useState('');
	const [petSpecies, setPetSpecies] = useState('');
	const [petBreed, setPetBreed] = useState('');
	const [petGender, setPetGender] = useState('');
	const [lastSeen, setLastSeen] = useState('');
	const [pets, setPets] = useState([]);
	const [image, setImage] = useState();
	const [uri, seturi] = useState('');
	const [imageName, setimageName] = useState('');
	const [isCertified, setIsCertified] = useState(false);

	const choosePhotoFromLibrary = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 300,
			cropping: true,
			compressImageQuality: 0.7
		}).then(image => {
			seturi(image.path);
			setImage(image.path);
			setimageName(image.modificationDate);
			console.log('Image URI', uri);
			console.log('Received Image', image);
		});
	}

	const addPet = async () => {
		const input = { petName, petSpecies, petBreed, petGender, lastSeen, image, isCertified };
		const result = await API.graphql(graphqlOperation(createPet, { input }));

		try {
			const response = await fetch(uri);
			const blob = await response.blob();
			await Storage.put(imageName, blob, {
				contentType: 'image/jpeg',
				level: 'public'
			});
		} catch (err) {
			console.log('----Image name:', image.fileName);
			console.log('----Image URI:', image.uri);
			console.log('----Image Path:', image.path);
			console.log('----Image:', image);
			console.log('Error uploading file:', err);
		}

		console.log('----Image name:', image.fileName);
		console.log('----Image URI:', image.uri);
		console.log('----Image Path:', image.path);
		console.log('----Image:', image);
    console.log(result, 'result');
		const newPet = result.data.createPet;
		console.log(newPet, 1234);
		const updatedPet = [newPet, ...pets];
		setPets(updatedPet);
		// setPetName('');
		// setPetSpecies('');
		// setPetBreed('');
		// setPetGender('');
		// setLastSeen('');
		// setImage('');
		navigation.navigate('LostPets');


	};

	return (
		<>
			<ScrollView style={styles.container}>
				<StatusBar barStyle="dark-content" />
				<View style={styles.container}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Upload Pet</Text>
					</View>
					<View style={styles.contentsContainer}>
						<TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
							<View style={styles.roundImage}>
								{image ? <Image source={{ uri: image }} style={styles.image} />
									: (
										<View style={styles.dogImageContainer}>
											<Image source={require('../../assets/corgi.png')} />
											<Text style={styles.roundImageText}>+ Pet Image</Text>
										</View>
									)}
							</View>
						</TouchableOpacity>
						<ScrollView>
							<TextInput
								style={styles.input}
								value={petName}
								onChangeText={text => setPetName(text)}
								placeholder="Pet Name"
							/>

							<TextInput
								style={styles.input}
								value={petSpecies}
								onChangeText={text => setPetSpecies(text)}
								placeholder="Pet Species"
							/>

							<TextInput
								style={styles.input}
								value={petBreed}
								onChangeText={text => setPetBreed(text)}
								placeholder="Pet Breed"
							/>

							<TextInput
								style={styles.input}
								value={petGender}
								onChangeText={text => setPetGender(text)}
								placeholder="Pet Gender"
							/>

							<TextInput
								style={styles.input}
								value={lastSeen}
								onChangeText={text => setLastSeen(text)}
								placeholder="Last Seen Location"
							/>
							<TouchableOpacity onPress={addPet} style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Upload</Text>
							</TouchableOpacity>
						</ScrollView>
					</View>
				</View>
			</ScrollView>
		</>
	);
}

const style = StyleSheet.create({
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
});