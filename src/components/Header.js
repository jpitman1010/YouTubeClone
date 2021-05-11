import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Constant from 'expo-constants';

const gray = "#212121"

export default function Header() {

  return (
    <View style={styles.container1}>
        <View style={styles.container2} >
            <Entypo name= "youtube" size={28} color="red"/>
            <Text style={styles.text}>
                YouTube
            </Text>
        </View>
        <View style={styles.container3} >
        
        <Entypo name= "video-camera" size={28} color={gray}/>
        <FontAwesome name="search" size={24} color="black" />
        <MaterialIcons name="account-circle" size={24} color="black" />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
        marginTop: Constant.statusBarHeight,
        height:42,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',  
        elevation: 4,
    },
    container2: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    container3: {
        flexDirection: 'row',
        marginLeft: 15,
        width: 150,     
        justifyContent: 'space-around',  

    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: gray,
    }

});
