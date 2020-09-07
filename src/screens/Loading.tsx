// React
import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class LoadingScreen extends Component<{ navigation: any }>{
    render(){
        return(
            <View>
                <Text>First page of the app ...</Text>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("LeagueListing")}}>
                    <Text>View league listing</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("PlayerProfile")}}>
                    <Text>View player profiles</Text>
                </TouchableOpacity>
            </View>
        )
    }
}