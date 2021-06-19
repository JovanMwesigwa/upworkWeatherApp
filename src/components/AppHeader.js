/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from '../../src/components/AppText'
import globalStyles from '../../styles'

const AppHeader = () => {
    return (
        <View style={styles.container}>
            <AppText otherProps={styles.text}>WeatherApp</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: globalStyles.green,
        justifyContent: 'center',
        height: 65,
    },
    text: {
        color: globalStyles.white,
        fontSize: 20,
    }
})

export default AppHeader
