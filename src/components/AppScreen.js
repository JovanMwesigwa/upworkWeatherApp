/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, StatusBar, View,SafeAreaView } from 'react-native'

const AppScreen = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default AppScreen
