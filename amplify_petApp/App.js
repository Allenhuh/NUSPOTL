import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddPetScreen from './src/screens/add-pet-screen';
import HomeScreen from './src/screens/home-screen';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              headerTitleStyle: { alignSelf: 'center' },
              title: 'Welcome to POTL',
              headerStyle: {
                backgroundColor: '#E8D7D2',
              },
              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="sign-out" size={25} color="#000000" />}
                    onPress={ () => {
                      Auth.signOut();
                    }}
                    type="clear"
                  />
                </View>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('AddPet')}>
                  <Icon name={'plus'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="AddPet"
            buttonStyle={styles.addButton}
            component={AddPetScreen}
            options={{
              headerTitleStyle: { alignSelf: 'center' },
              title: 'Add Pet',
              headerStyle: {
                backgroundColor: '#A0B3C1',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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

export default withAuthenticator(App);