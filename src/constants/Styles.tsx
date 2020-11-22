import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

export default StyleSheet.create({
    //containers/views
    maincontainer: {
        backgroundColor: Colors.lightGrey,
        flex: 1
    },

    tilecontainer: {
        borderRadius: 10,
        backgroundColor: Colors.darkGreen,

        marginVertical: 5,
        padding: 15,
        marginHorizontal: 25,

        shadowColor: Colors.grey,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        elevation: 2
    },

    tileheadercontainer: {
        marginTop: 20, 
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //text
    headingtext: {
        fontFamily: Fonts.NunitoBold,
        color: Colors.windowsBlue,
        fontSize: 36,
        lineHeight: 24,
        textAlign: 'center',
    },
    tile1title: {
        fontSize: 26,
        color: Colors.warmGrey,
        lineHeight: 40,
    }
});