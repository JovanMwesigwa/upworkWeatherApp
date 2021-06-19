/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import globalStyles from '../../styles'

const AppText = ({ children, otherProps }) => {
    return (
        <View>
            <Text style={[styles.text, {...otherProps}]}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: globalStyles.black,
    }
})

export default AppText
