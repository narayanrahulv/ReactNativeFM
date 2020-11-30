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
import { getPopularCupList, getPopularLeagueList, getPopularLeagueCountriesList, getPopularCupCountriesList, icons } from '../../constants/AppConstants';

// Components
// import PopularCups from '../../components/leagueComponents/PopularCups';
import LeagueImage from '../../components/leagueComponents/LeagueImage';

export default class LeaguesScreen extends Component<{ navigation: any, StateModel }> {
    constructor(props) {
        super(props);

        this.state = {
            popularLeaguesForType: [],
            displayedLeagueNames: []
        }
    }

    //display lists
    private popularLeaguesForType: LeagueModel[];
    //filters
    private popularLeagueNamesForType: string[];
    private popularCountriesForType: string[];

    componentDidMount = async () => {
        this.displayPopularLeaguesForType();
    }

    displayPopularLeaguesForType = async () => {
        if (this.props.navigation.state.params.leagueType === "Cup"){
            this.popularLeagueNamesForType = getPopularCupList();
            this.popularCountriesForType = getPopularCupCountriesList();
        }
        else {
            this.popularLeagueNamesForType = getPopularLeagueList();
            this.popularCountriesForType = getPopularLeagueCountriesList();
        }

        //filter out popular leagues (if applicable, countries) for the passed in leagueType parameter
        this.popularLeaguesForType = this.props.navigation.state.params.leagueData.filter
                                (l => (l.type === this.props.navigation.state.params.leagueType) 
                                        && (this.popularLeagueNamesForType.includes(l.name))
                                        && (this.popularCountriesForType.includes(l.country)));

        const uniqueLeagueNames = [...new Set(this.popularLeaguesForType.map(item => item.name))]

        this.setState({
            popularLeaguesForType: this.popularLeaguesForType,
            displayedLeagueNames: uniqueLeagueNames
        })
    }

    getLeagueIcon = async(leagueName: string) => {
        var iconlookup = leagueName.replace(/\s/g,"").toLowerCase();
        console.log(icons[iconlookup]);
    }

    render() {
        return (
            <ScrollView style={Styles.maincontainer}>
                {
                    this.state.displayedLeagueNames.map((dl, i) => {
                        return(
                            <View key={i} style={[Styles.tilecontainer,
                                {flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}]}>
                                <View style={{ width: "50%", marginLeft: 5}}>
                                    <Text style={Styles.titletext}>{dl}</Text>
                                </View>
                                <View style={{ width: "50%"}}>
                                    <LeagueImage leagueName={dl} />
                                </View>
                            </View> 
                        )
                    })
                }
            </ScrollView>
        )
    }
}

interface StateModel {
    popularLeaguesForType: Array<LeagueModel>;
    displayedLeagueNames: string[];
}