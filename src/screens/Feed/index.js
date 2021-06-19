/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import axios from 'axios'

import AppText from '../../components/AppText'
import {AppHeader, AppCard} from '../../components/'

import styles from './styles'

const url  = "http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=df80b001f171e73653fa91e26405a9ef"


const FeedScreen = () => {
    const [ cities, setCities ] = React.useState([]);

    React.useEffect(() => {
        fetchData()
    },[])

    const fetchData = async() => {
        try{
            const res = await axios.get(url);
            setCities(res.data.list)
        }catch(err) {
            console.log(err)
        }
        
    }

    return (
        <View style={styles.container}>
            <AppHeader />
            <View style={styles.inner}>
                <FlatList 
                    data={cities}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item }) => (
                        <AppCard item={item} />
                    )}
                    keyExtractor={(item)  => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default FeedScreen
