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

const Tab = createBottomTabNavigator();
const LostPetsStack = createStackNavigator();
const MyPetStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const FAQStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const TabNavigation = (props) => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Lost Pets"
				options={{
					tabBarLabel: 'Lost Pets',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="run-fast" color={color} size={size} />
					),
				}}>
				{() => (
					<LostPetsStack.Navigator>
						<LostPetsStack.Screen name="Settings" component={HomeScreen} 
						options={({ navigation }) => ({
							headerTitleStyle: { color:'#3bb0d6', alignSelf: 'center'},
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
								  onPress={() => navigation.navigate('My Pets')}>
								  <Icon name={'plus'} size={20} color="#656d77" />
								</TouchableOpacity>
							  ),
						  })} />
					</LostPetsStack.Navigator>
				)}
			</Tab.Screen>
			<Tab.Screen name="My Pets"
				options={{
					tabBarLabel: 'My Pets',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="dog-side" color={color} size={size} />
					),
				}}>
				{() => (
					<MyPetStack.Navigator>
						<MyPetStack.Screen name="My Pet" component={AddPetScreen} />
					</MyPetStack.Navigator>
				)}
			</Tab.Screen>
			<Tab.Screen name="Settings"
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
			<Tab.Screen name="Profile"
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
			</Tab.Screen>
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
