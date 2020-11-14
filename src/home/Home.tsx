import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import React, { Component } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

/**
 * @param {{ navigation: Object }} props
 */
export class HomeScreen extends Component {

    navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation
        
        this.showConfigScreen = this.showConfigScreen.bind(this)
    }

    static navigationOptions = {
        position: "absolute",
        headerStyle: {
            backgroundColor: 'transparent'
        }
    }

    items = [
        {
            text: "Something here" 
        },
        {
            text: "Something else"
        }
    ]
    
    showConfigScreen() {
        this.navigation.navigate("Config")
    }

    render() {
        return (
            <SafeAreaView style={{ height:"100%" }}>
                <FlatList 
                    data={ this.items }
                    renderItem={ renderItem }
                    keyExtractor={ item => this.items.indexOf(item).toString() }
                />
            </SafeAreaView>
        )
    }
}

const Item = ({ text }) => (
    <View style={{
        backgroundColor: "blue",
    }}>
        <View style={{
            padding: 16
        }} >
        <Text>{text}</Text>

        </View>


        <View style={{
            backgroundColor: "#ddd",
            height: 1,
            marginStart: 16
        }}/>

    </View>
);

const renderItem = ({ item }) => (
    <Item text={item.text} />
);
