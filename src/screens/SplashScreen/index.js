/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyles from '../../../styles'

import AppText from '../../components/AppText'

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppText otherProps={styles.text}>WeatherApp</AppText>
            <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
                <AppText>>></AppText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 32,
        fontWeight: "600",
        color: globalStyles.green,
    }
})

export default SplashScreen
