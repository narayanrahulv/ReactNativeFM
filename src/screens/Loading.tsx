// React
import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

// Services
import { LeagueService } from '../services/LeagueService';

// Models
import { LeagueModel } from '../datamodels/LeagueModel';

// Constants
import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export default class LoadingScreen extends Component<{ navigation: any }>{
    constructor(props) {
        super(props);

        this.state = {
            retrievedLeagueData: [],
            leagueTypes: []
        }
    }

    private ls = new LeagueService();
    private allLeagues: LeagueModel[];

    componentDidMount = async () => {
        //retrieve all league information from the API and store it in state
        this.allLeagues = await this.ls.getAllLeagues();

        this.setState({
            retrievedLeagueData: this.allLeagues
        });

        this.getLeagueTypes();
    }

    getLeagueTypes = async () => {
        //retrieve unique league types
        const filteredLeagueTypes = [...new Set(this.state.retrievedLeagueData.map(item => item.type))]

        this.setState({
            leagueTypes: filteredLeagueTypes
        })
    }

    viewInfoForLeagueType(leagueTypeSelected: string) {
        //view year based list depending on the type of league selected
        this.props.navigation.navigate("Leagues", { leagueData: this.state.retrievedLeagueData, leagueType: leagueTypeSelected });
    }

    render(){
        console.log(this.state.leagueTypes);

        return(
            // user begins by selecting a 'type' of league to get information for
            <ScrollView style={Styles.maincontainer}>
            {
                this.state.leagueTypes.map((lt, i) => {
                    return(
                        <View key={i} style={Styles.tilecontainer}>
                            <TouchableOpacity onPress={() => this.viewInfoForLeagueType(lt)}>
                                <Text style={Styles.titletext}>{lt}</Text>
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
    retrievedLeagueData: LeagueModel[];
    leagueTypes: string[]
}