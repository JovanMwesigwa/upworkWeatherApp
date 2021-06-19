/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import AppText from './AppText'

const AppCard = ({ item }) => {

  const navigation = useNavigation();

  return (
    <Pressable style={styles.card} onPress={() => navigation.navigate('Map', {item})}>
      <View style={styles.left}>
        <AppText otherProps={styles.header}>{item.name}</AppText>
        <AppText otherProps={styles.weather}>{item.weather[0].main}</AppText>
      </View>
      <View style={styles.right}>
        <AppText otherProps={styles.temp}>{item.clouds.all}</AppText>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        borderBottomWidth: 0.3,
        borderBottomColor: 'grey'
    },
    temp: {
        fontSize: 28,
    },
    header: {
        fontSize: 18,
        paddingBottom: 12,
    },
    weather: {
        fontSize: 14
    }
});

export default AppCard;
