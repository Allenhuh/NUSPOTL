import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AddPetScreen from '../screens/add-pet-screen';
import HomeScreen from '../screens/home-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
						<LostPetsStack.Screen name="Settings" component={HomeScreen} />
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
						<SettingsStack.Screen name="Settings" component={AddPetScreen} />
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
						<FAQStack.Screen name="FAQ" component={AddPetScreen} />
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
						<ProfileStack.Screen name="Profile" component={AddPetScreen} />
					</ProfileStack.Navigator>
				)}
			</Tab.Screen>
		</Tab.Navigator>
	);

};

export default TabNavigation;
