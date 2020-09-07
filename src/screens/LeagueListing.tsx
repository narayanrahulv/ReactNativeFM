// React
import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class LeagueListingScreen extends Component<{ navigation: any }>{
    render(){
        return(
            <View>
                <Text>List of leagues</Text>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Loading")}}>
                    <Text>View main screen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("PlayerProfile")}}>
                    <Text>View player profiles</Text>
                </TouchableOpacity>
            </View>
        )
    }
}