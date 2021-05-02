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

export default class SearchScreen extends Component {
    state = { pets: [], refreshing: false }
    navigation;

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
        this.loadPets();
    }

    async componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Have you seen me?</Text>
                    </View>
                    <View style={[styles.inputContainer, style.list]}>
                        {petList}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({

});