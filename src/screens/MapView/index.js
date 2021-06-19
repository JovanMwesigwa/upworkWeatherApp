/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { useRoute } from '@react-navigation/core';

import AppText from '../../components/AppText'
import {AppHeader, AppCard} from '../../components/'

import styles from './styles'

const MapViewScreen = () => {

    const route = useRoute();

    const { item } = route.params;
    return (
        <View style={styles.container}>
            <AppHeader />
            <View style={styles.inner}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: item.coord.lat,
                    longitude: item.coord.lon,
                    latitudeDelta: 1.000,
                    longitudeDelta: 0.0621,
                }}
                zoomEnabled={true}
                showsUserLocation={true}
                >
                    <Marker
                        coordinate={{ latitude : item.coord.lat , longitude : item.coord.lon }}
                        />
            </MapView>
            </View>
            <View style={styles.info}>
                <View>
                    <AppText otherProps={styles.header}>{item.name}</AppText>
                    <AppText otherProps={styles.infoText}>{item.weather[0].main}</AppText>
                    <AppText otherProps={styles.infoText}>Humdity {item.main.humidity}</AppText>
                    <AppText otherProps={styles.infoText}>Wind Speed: {item.wind.speed}</AppText>
                    <AppText otherProps={styles.infoText}>Max. Temp: {item.main.temp_max}*c</AppText>
                    <AppText otherProps={styles.infoText}>Min. Temp: {item.main.temp_min}*c</AppText>
                </View>
                <View style={styles.iconContainer}>
                    <AppText otherProps={styles.temp}>{item.clouds.all}*c</AppText>
                </View>
            </View>
        </View>
    )
}

export default MapViewScreen
