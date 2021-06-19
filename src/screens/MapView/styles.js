/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Dimensions} from 'react-native'
import globalStyles from '../../../styles';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    inner: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    info: {
        alignItems: 'center',
        flexDirection: 'row',
        height: Dimensions.get('window').height / 3,
        padding: 15,
        backgroundColor: globalStyles.white,
        justifyContent: 'space-between'
    },
    header: {
        fontWeight: '700',
        paddingBottom: 12
    },
    temp: {
        fontSize: 32
    },
    iconContainer: {

    },
    infoText: {
        fontSize: 15,
    }
})
export default styles;
