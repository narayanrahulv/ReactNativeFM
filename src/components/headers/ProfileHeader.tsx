// React
import React, { Component, Fragment } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

// Node modules
import Icon from 'react-native-vector-icons/Feather';

// Constants
import Colors from '../../constants/Colors';

export default class ProfileHeader extends Component<{
    navigation: any,
    type: "green" | "grey"
    close?: () => void
    returnUrl?: string,
    prevScreenValue?: string,
    overwriteBackFunction?: () => void,
},
{}>{
    private backgroundColor: string;

    constructor(props) {
        super(props);
        Icon.loadFont();

        this.backgroundColor = this.props.type === "green" ? Colors.regularGreen : Colors.lightGrey;
    }
}