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
    private allLeaguesForType: LeagueModel[];

    componentDidMount = async () => {
        //TEMP TESTING CODE
        console.log("======");
        console.log(this.props.navigation.state.params.leagueData);
        console.log(this.props.navigation.state.params.leagueType);

        //this.getLeagueTypeDataAndYears();
        this.displayLeagues();
        //END TEMP TESTING CODE

        //TEMP COMMENTED OUT
        // //retrieve all leagues from the API
        // this.allLeagues = await this.ls.getAllLeagues();

        // //display tiles for each season retrieved
        // this.displayLeagueSeasonYears();
        //END TEMP COMMENTED OUT
    }

    displayLeagues() {
        this.allLeaguesForType = this.props.navigation.state.params.leagueData.filter
                                (l => (l.type === this.props.navigation.state.params.leagueType));

        console.log("this.allLeaguesForType");
        console.log(this.allLeaguesForType);                                
    }

    getLeagueTypeDataAndYears() {
        //filter out relevant leagues based on leagueType passed in
        this.allLeaguesForType = this.props.navigation.state.params.leagueData.filter
                                (l => (l.type === this.props.navigation.state.params.leagueType));

        console.log("this.allLeaguesForType");
        console.log(this.allLeaguesForType);                                

        //retrieve unique years from above list
        //const leagueSeasonYears = [...new Set(this.allLeagues.map(item => item.season))]
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