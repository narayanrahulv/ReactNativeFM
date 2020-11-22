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

// Components
import PopularLeagues from '../../components/leagueComponents/PopularLeagues';

export default class PopularLeagueListScreen extends Component<{ 
    leagueSeason: number,
    retrievedLeagues: LeagueModel[] 
}> {
    constructor(props){
        super(props);

        this.state = {
            season: 0,
            leagues: [],
        }
    }

    render() {
        return(
            <ScrollView style={Styles.maincontainer}>
                <View>
                    <Text>full list of leagues</Text>
                    <PopularLeagues leagueSeason={this.props.navigation.state.params.leagueSeason} retrievedLeagues={this.props.navigation.state.params.retrievedLeagues}>
                    </PopularLeagues>
                </View>
            </ScrollView>
        )
    }
}