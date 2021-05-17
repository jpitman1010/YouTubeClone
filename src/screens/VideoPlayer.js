import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constant from 'expo-constants';
import Header from '../components/Header';


const VideoPlayer = ()=>{
    return (
        <View style={styles.container}>
            <Header />

            <Text>VideoPlayer page</Text>

        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constant.statusBarHeight,
       
    },

});


export default VideoPlayer;