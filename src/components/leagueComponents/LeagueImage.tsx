// React
import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity, Image } from 'react-native';

// Services
import { LeagueService } from '../../services/LeagueService';

// Models
import { LeagueModel } from '../../datamodels/LeagueModel';

// Constants
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { icons } from '../../constants/AppConstants';

export default class LeagueImage extends Component<{
    leagueName: string,
}>
{
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        var iconlookup = this.props.leagueName.replace(/\s/g,"").toLowerCase();
        console.log("this is the key");
        console.log(iconlookup);
    }

    render() {
        return(<Image source={icons[this.props.leagueName.replace(/\s/g,"").toLowerCase()]}></Image>)
    }
}