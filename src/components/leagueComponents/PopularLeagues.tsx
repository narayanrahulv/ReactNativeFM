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
import { popularLeagues } from '../../constants/AppConstants';

export default class PopularLeagues extends Component<{
    leagueSeason: number,
    retrievedLeagues: LeagueModel[]
}>
{
    constructor(props){
        super(props);

        this.state = {
            displayedLeagues: []
        }
    }

    private popularLeagues: LeagueModel[];

    componentDidMount = async () => {
        //filter popular leagues out of the passed in retrievedLeagues prop
        this.getPopularLeaguesForYear();
    }

    getPopularLeaguesForYear() {
        this.popularLeagues = this.props.retrievedLeagues.filter
                                (pl => (pl.name === "Premier League" 
                                        || pl.name === "Primera Division"
                                        || pl.name === "Ligue 1"
                                        || pl.name === "Serie A"
                                        || pl.name === "Bundesliga")
                                && (pl.country === "England" 
                                        || pl.country === "Spain"
                                        || pl.country === "France"
                                        || pl.country === "Italy"
                                        || pl.country === "Germany")
                                && pl.season === this.props.leagueSeason);

        this.setState({
            displayedLeagues: this.popularLeagues
        });
    }

    render(){
        return(
            <ScrollView style={Styles.maincontainer}>
                {
                    this.state.displayedLeagues.map((dl, i) => {
                        return(
                            <View key={i} style={Styles.tilecontainer}>
                                <Text style={Styles.tile1title}>{dl.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>   
        )
    }
}

interface StateModel {
    displayedLeagues: Array<LeagueModel>;
}