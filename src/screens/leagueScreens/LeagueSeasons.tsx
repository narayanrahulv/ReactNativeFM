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

export default class LeagueSeasonsScreen extends Component<{ navigation: any, StateModel }>{
    constructor(props) {
        super(props);

        this.state = {
            leagueSeasonYears: [],
        }
    }

    private ls = new LeagueService();
    private allLeagues: LeagueModel[];

    componentDidMount = async () => {
        //retrieve all leagues from the API
        this.allLeagues = await this.ls.getAllLeagues();

        //display tiles for each season retrieved
        this.displayLeagueSeasonYears();
    }

    showPopularLeaguesForSeason(currentLeagueSeason: number) {
        this.props.navigation.navigate("PopularLeagueList", { leagueSeason: currentLeagueSeason, retrievedLeagues: this.allLeagues });
    }

    displayLeagueSeasonYears() {
        //retrieve unique years
        const leagueSeasonYears = [...new Set(this.allLeagues.map(item => item.season))]

        //sort descending
        leagueSeasonYears.sort((a,b) => 0 - (a > b ? 1 : -1));

        this.setState({
            leagueSeasonYears: leagueSeasonYears
        })
    }

    render(){
        return(
            <ScrollView style={Styles.maincontainer}>
                {
                    this.state.leagueSeasonYears.map((y, i) => {
                        return(
                            <View key={i} style={Styles.tilecontainer}>    
                                <TouchableOpacity onPress={() => this.showPopularLeaguesForSeason(y)}>
                                    <Text style={Styles.tile1title}>{y}</Text>
                                </TouchableOpacity>
                            </View>       
                        )
                    })
                }
            </ScrollView>
        )
    }
}

interface StateModel {
    leagueSeasonYears: Array<number>;
}