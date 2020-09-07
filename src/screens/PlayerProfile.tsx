// React
import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class PlayerProfileScreen extends Component<{ navigation: any }>{
    render(){
        return(
            <View>
                <Text>this is the player profile page</Text>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Loading")}}>
                    <Text>View main screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("LeagueListing")}}>
                    <Text>View league listing</Text>
                </TouchableOpacity>
            </View>
        )
    }
}