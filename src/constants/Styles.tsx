import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

export default StyleSheet.create({
    //containers/views
    maincontainer: {
        backgroundColor: Colors.darkGreen,
        flex: 1
    },

    tilecontainer: {
        borderRadius: 5,
        backgroundColor: Colors.white,

        marginVertical: 2,
        //padding: Dimensions.get('window').width > 375 ? 15 : 7,

        shadowColor: Colors.grey,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        elevation: 2
    },

    tileheadercontainer: {
        marginTop: 20, 
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentContainer: {
        height: 45,
        borderWidth: 1,
        borderColor: Colors.black
    },

    //text
    headingtext: {
        fontFamily: Fonts.NunitoBold,
        color: Colors.black,
        fontSize: 36,
        lineHeight: 24,
        textAlign: 'center',
    },
    titletext: {
        fontSize: 26,
        color: Colors.black,
        lineHeight: 40,
    }
});