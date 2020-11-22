// React
import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

// Services
import { LeagueService } from '../services/LeagueService';

// Models
import { LeagueModel } from '../datamodels/LeagueModel';

// Constants
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export default class LoadingScreen extends Component<{ navigation: any }>{
    render(){
        return(
            <View>
                <Text>First page of the app ...</Text>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("LeagueSeasons")}}>
                    <Text>View league listing</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate("PlayerProfile")}}>
                    <Text>View player profiles</Text>
                </TouchableOpacity>
            </View>
        )
    }
}