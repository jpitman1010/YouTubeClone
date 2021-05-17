import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Constant from 'expo-constants';
import { useNavigation } from '@react-navigation/native';



const gray = "#212121"

export default function Header() {
    const navigation = useNavigation()

  return (
    <View style={styles.container1}>
        <View style={styles.container2} >
            <Entypo name= "youtube" size={28} color="red"/>
            <Text style={styles.text}>
                YouTube
            </Text>
        </View>
        <View style={styles.container3} >
        
        <Entypo name= "video-camera" size={24} color={gray}/>
        <FontAwesome name="search" size={24} color="black" 
        onPress={()=>navigation.navigate("Search")}/>
        <MaterialIcons name="account-circle" size={24} color="black" />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
        height:42,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-between',  
        elevation: 10,
        shadowOffset: {width:5,height: 5, },
        shadowColor: gray,
        shadowOpacity: 1.0,
        marginBottom: 10,
    },
    container2: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 5,

    },
    container3: {
        flexDirection: 'row',
        marginLeft: 15,
        width: 150,     
        justifyContent: 'space-around',  
        marginTop: 5,

    },
    text: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: gray,
    }

});
