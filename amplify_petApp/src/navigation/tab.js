import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AddPetScreen from '../screens/add-pet-screen';
import HomeScreen from '../screens/home-screen';
import FaqScreen from '../screens/faq-screen';
import ProfileScreen from '../screens/profile-screen';
import SettingScreen from '../screens/setting-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Auth } from 'aws-amplify';
import ReportPetScreen from '../screens/report-pet-screen';
import SearchScreen from '../screens/search-screen';

const Tab = createBottomTabNavigator();
const LostPetsStack = createStackNavigator();
const MyPetStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const FAQStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const TabNavigation = (props) => {
	return (
		<Tab.Navigator initialRouteName="LostPets">

			<Tab.Screen name="MyPets"
				options={{
					tabBarLabel: 'My Pets',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="dog-side" color={color} size={size} />
					),
				}}>
				{() => (
					<MyPetStack.Navigator>
						<MyPetStack.Screen name="My Pet" component={AddPetScreen}
							options={{ title: 'MY PET', headerTitleStyle: { color: '#3bb0d6', alignSelf: 'center' } }} />
					</MyPetStack.Navigator>
				)}
			</Tab.Screen>

			{/* <Tab.Screen name="Settings"
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="cog-outline" color={color} size={size} />
					),
				}}>
				{() => (
					<SettingsStack.Navigator>
						<SettingsStack.Screen name="Settings" component={SettingScreen} />
					</SettingsStack.Navigator>
				)}
			</Tab.Screen> */}

			<Tab.Screen name="LostPets"
				options={{
					tabBarLabel: 'Lost Pets',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="run-fast" color={color} size={size} />
					),
				}}>
				{() => (
					<LostPetsStack.Navigator>
						<LostPetsStack.Screen name="LostPets" component={HomeScreen}
							options={({ navigation }) => ({
								headerTitleStyle: { color: '#3bb0d6', alignSelf: 'center' },
								title: 'P  O  T  L',
								headerStyle: {
									backgroundColor: '#F9F9F9',
								},
								headerLeft: () => (
									<View style={styles.logOutBtn}>
										<Button
											icon={<Icon name="sign-out" size={25} color="#656d77" />}
											onPress={() => {
												Auth.signOut();
											}}
											type="clear"
										/>
									</View>
								),
								headerRight: () => (
									<TouchableOpacity
										style={styles.addButton}
										onPress={() => navigation.navigate('SearchPets')}>
										<Icon name={'plus'} size={20} color="#656d77" />
									</TouchableOpacity>
								),
							})} />
						<LostPetsStack.Screen name="ReportLostPets" component={ReportPetScreen}
							options={({ navigation }) => ({
								headerTitleStyle: { color: '#3bb0d6', alignSelf: 'center' },
								title: 'Report Lost Pet',
								headerStyle: {
									backgroundColor: '#F9F9F9',
								},
								headerRight: () => (
									<View></View>
								)
							})} />
						<LostPetsStack.Screen name="SearchPets" component={SearchScreen}
							options={({ navigation }) => ({
								headerTitleStyle: { color: '#3bb0d6', alignSelf: 'center' },
								title: 'Report Lost Pet',
								headerStyle: {
									backgroundColor: '#F9F9F9',
								},
								headerRight: () => (
									<View></View>
								)
							})} />
					</LostPetsStack.Navigator>
				)}
			</Tab.Screen>

			<Tab.Screen name="FAQ"
				options={{
					tabBarLabel: 'FAQ',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="frequently-asked-questions" color={color} size={size} />
					),
				}}>
				{() => (
					<FAQStack.Navigator>
						<FAQStack.Screen name="FAQ" component={FaqScreen} />
					</FAQStack.Navigator>
				)}
			</Tab.Screen>

			{/* <Tab.Screen name="Profile"
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="account-circle" color={color} size={size} />
					),
				}}>
				{() => (
					<ProfileStack.Navigator>
						<ProfileStack.Screen name="Profile" component={ProfileScreen} />
					</ProfileStack.Navigator>
				)}
			</Tab.Screen> */}
		</Tab.Navigator>
	);

};

const styles = StyleSheet.create({
	addButton: {
		marginRight: 20,
	},
	logOutBtn: {
		marginLeft: 10,
	},
});

export default TabNavigation;
