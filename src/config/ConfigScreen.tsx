import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { AppStyle } from "..";

/**
 * @param {{navigation: any}} props
 * @param {{inputPlaceholder: string}} this.state
 */
export class ConfigScreen extends Component {

    navigation: any;

    state = {
        textWhat: "",
        inputPlaceholder: ""
    }
    
    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            textWhat: "Some text wghat",
            inputPlaceholder: "Something something"
        }
    }


    render() {
        return (
            <SafeAreaView>
                <ScrollView>

                    <Text style={styles.titleText}> { this.state.textWhat } </Text>

                    <TextInput> {this.state.inputPlaceholder} </TextInput>

                    <Button
                        title="goBack Pop"
                        onPress={this.navigation.goBack}
                    />

                    <Button
                        title="navigate Pop"
                        onPress={() => this.navigation.navigate("Home")}
                    />

                    <Button
                        title="Change placeholder"
                        onPress={() => this.setState({ inputPlaceholder: "Smething else" })}
                    />

                </ScrollView>

            </SafeAreaView>
        )
    }
}

export const styles = StyleSheet.create({
    titleText: {
        fontSize: 28,
        padding: 16
    }
})
