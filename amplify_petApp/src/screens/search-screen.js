import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styling/HomeScreen';
import { API, autoShowTooltip, Storage, graphqlOperation } from 'aws-amplify';
import { listPets } from '../../graphql/queries';
import { ScrollView } from 'react-native';

export default class SearchScreen extends Component {
    state = { tags: [], modal: false, tagsId: [] }
    navigation;

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    async componentDidMount() {
    }

    species = [
        { name: 'Dog', id: 201, type: 'species' },
        { name: 'Cat', id: 202, type: 'species' },
        { name: 'Bird', id: 203, type: 'species' },
        { name: 'Fish', id: 204, type: 'species' },
        { name: 'Hamster', id: 205, type: 'species' },
        { name: 'Turtle', id: 206, type: 'species' },
        { name: 'Lizard', id: 207, type: 'species' },
        { name: 'Spider', id: 208, type: 'species' },
    ];

    color = [
        { name: 'White', id: 101, type: 'color' },
        { name: 'Black', id: 102, type: 'color' },
        { name: 'Brown', id: 103, type: 'color' },
        { name: 'Yellow', id: 104, type: 'color' },
        { name: 'Gray', id: 105, type: 'color' },
        { name: 'Blue', id: 106, type: 'color' },
        { name: 'Red', id: 107, type: 'color' },
        { name: 'Green', id: 108, type: 'color' },
        { name: 'Gold', id: 109, type: 'color' },
        { name: 'Pink', id: 110, type: 'color' },
        { name: 'Purple', id: 111, type: 'color' },
        { name: 'Orange', id: 112, type: 'color' },
    ];

    selectOne(id, type) {
        const name = this[type].find(e => {
            return e.id === id;
        });
        const tagList = this.state.tags;
        const tagExist = tagList.find(e => {
            return e.type === type;
        });
        if (tagExist && tagExist.id !== name.id) {
            const index = tagList.indexOf(tagExist);
            tagList.splice(index, 1);

            tagList.push(name);
            this.setState({ tags: tagList });
        } else if (!tagExist) {
            this.setState({ tags: [...this.state.tags, name] });
        }
    }

    selectMultiple(id, type) {
        const selected = this[type].find(e => {
            return e.id === id;
        });

        const exist = this.state.tags.find(e => {
            return e.id === id;
        });
        console.log(exist, 'exist');
        if(exist) {
            const list = this.state.tags;
            const index = list.indexOf(exist);
            
            list.splice(index, 1);
            this.setState({ tags: list });
        } else {
            this.setState({ tags: [...this.state.tags, selected] });
        }
    }

    buildOptionList(list, listType) {
        if (list.length > 0 && listType) {
            return list.map(e => this.buildOptionsSingle(e));
        } else if (list.length > 0 && !listType) {
            return list.map(e => this.buildOptionsMultiple(e));
        }
        return [];
    }

    buildOptionsSingle(option) {
        const exist = this.state.tags.find(e => {
            return e.id === option.id;
        });
        const isSelected = exist !== null && exist !== undefined;
        console.log(isSelected, 'isSelected');
        let buttonCss = [style.optionButton];
        let buttonTextCss = [style.optionBtnText];
        if(isSelected) {
            buttonCss.push(style.optionButtonSelected);
            buttonTextCss.push(style.optionButtonTextSelected);
        }
        return (
            <TouchableOpacity key={option.id} style={buttonCss} onPress={() => this.selectOne(option.id, option.type)}>
                <Text style={buttonTextCss}>{option.name}</Text>
            </TouchableOpacity>
        );
    }

    buildOptionsMultiple(option) {
        const exist = this.state.tags.find(e => {
            return e.id === option.id;
        });
        const isSelected = exist !== null && exist !== undefined;
        console.log(isSelected, 'isSelected');
        let buttonCss = [style.optionButton];
        let buttonTextCss = [style.optionBtnText];
        if(isSelected) {
            buttonCss.push(style.optionButtonSelected);
            buttonTextCss.push(style.optionButtonTextSelected);
        }
        return (
            <TouchableOpacity key={option.id} style={buttonCss} onPress={() => this.selectMultiple(option.id, option.type)}>
                <Text style={buttonTextCss}>{option.name}</Text>
            </TouchableOpacity>
        );
    }

    preBuildSelectedOptions() {
        return this.state.tags.map(e => {
            return this.buildSelectedOptions(e);
        });
    }

    buildSelectedOptions(tag) {
        return (
            <View style={style.tagCtn}>
                <Text style={style.tagText}>{tag.name}</Text>
            </View>
        )
    }

    searchTag(modal) {
        this.setState({ modal });
    }

    search() {

    }

    render() {
        const { modal } = this.state;
        const speciesList = this.buildOptionList(this.species, true);
        const colorList = this.buildOptionList(this.color, false);
        const selected = modal ? this.preBuildSelectedOptions() : null;
        return (
            <View style={style.container}>
                <ScrollView>
                    <Text style={[styles.title, style.title]}>Search Tags</Text>

                    <View style={style.searchContainer}>
                        <Text style={style.optionTitle}>Species</Text>
                        <View style={style.optionContainer}>
                            {speciesList}
                        </View>
                    </View>

                    <View style={style.searchContainer}>
                        <Text style={style.optionTitle}>Colors</Text>
                        <View style={style.optionContainer}>
                            {colorList}
                        </View>
                    </View>
                </ScrollView>

                <View style={style.floatButtonCtn}>
                    <TouchableOpacity style={style.floatButton} onPress={() => this.searchTag(true)}>
                        <Text style={style.floatButtonText}>Confirm Search</Text>
                    </TouchableOpacity>
                </View>
                {modal &&
                    <View style={style.modalCtn}>
                        <View style={style.modal}>
                            <Text style={style.modalTitle}>Selected search tags</Text>

                            <View style={style.selectedTagsCtn}>
                                {selected}
                            </View>
                            <View style={style.modalBtnCtn}>
                                <TouchableOpacity style={style.modalBtn} onPress={() => this.search()}>
                                    <Text style={style.modalBtnText}>Search</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.modalBtn} onPress={() => this.searchTag(false)}>
                                    <Text style={style.modalBtnText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>}
            </View>
        );
    }
}

const style = StyleSheet.create({
    title: {
        alignSelf: 'center'
    },
    container: {
        display: 'flex',
        flex: 1,
        borderRadius: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchContainer: {
        width: '98%',
        marginHorizontal: 'auto',
        paddingHorizontal: 10,
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        padding: 5,
    },
    optionContainer: {
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    floatButtonCtn: {
        position: 'relative',
        bottom: 10,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    floatButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        padding: 12,
    },
    floatButtonText: {
        color: '#fff',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    optionButton: {
        display: 'flex',
        width: '30%',
        marginHorizontal: '1.5%',
        marginVertical: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'orange',
        padding: 8,
    },
    optionTitle: {
        fontSize: 14,
        color: '#000'
    },
    optionBtnText: {
        color: '#fff'
    },
    optionButtonSelected: {
        borderColor: 'orange',
        borderWidth: 1,
        backgroundColor: '#fff'
    },
    optionButtonTextSelected: {
        color: 'orange'
    },
    modalCtn: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#rgba(0, 0, 0, .5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    modal: {
        // top: '40%',
        position: 'relative',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 25,
        width: '60%'
    },
    modalTitle: {
        fontSize: 18,
        color: '#000'
    },
    selectedTagsCtn: {
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10,
    },
    tagCtn: {
        display: 'flex',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'orange',
        padding: 5,
    },
    tagText: {
        fontSize: 12,
        color: '#000'
    },
    modalBtnCtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalBtn: {
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'cyan',
        padding: 8,
    },
    modalBtnText: {
        color: '#000',
        fontSize: 13,
    }
});