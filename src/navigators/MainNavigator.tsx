//React
import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

//Screens
import LoadingScreen from '../screens/Loading';
import LeagueSeasonsScreen from '../screens/leagueScreens/LeagueSeasons';
import PopularLeagueListScreen from '../screens/leagueScreens/PopularLeagueList';
import PlayerProfileScreen from '../screens/PlayerProfile';

const MainNavigator = createSwitchNavigator({
    Loading: { screen: LoadingScreen },
    PlayerProfile: { screen: PlayerProfileScreen },
    LeagueSeasons: { screen: LeagueSeasonsScreen},
    PopularLeagueList: { screen: PopularLeagueListScreen}
},
{
    initialRouteName: 'Loading'
});

const AppContainer = createAppContainer(MainNavigator);

export default () => {
    return <AppContainer />
}