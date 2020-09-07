//React
import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

//Screens
import LoadingScreen from '../screens/Loading';
import LeagueListingScreen from '../screens/LeagueListing';
import PlayerProfileScreen from '../screens/PlayerProfile';

const MainNavigator = createSwitchNavigator({
    Loading: { screen: LoadingScreen },
    PlayerProfile: { screen: PlayerProfileScreen },
    LeagueListing: { screen: LeagueListingScreen}
},
{
    initialRouteName: 'Loading'
});

const AppContainer = createAppContainer(MainNavigator);

export default () => {
    return <AppContainer />
}