import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Constant from 'expo-constants';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const navigation = useNavigation()
    const {colors} = useTheme()
    const iconColor = colors.iconColor
    const dispatch = useDispatch()
    const currentTheme = useSelector(state=>{
        return state.darkMode
    })
  return (
    <View style={{height:42,
        backgroundColor: colors.headerColor,
        flexDirection: 'row',
        justifyContent: 'space-between',  
        elevation: 10,
        shadowOffset: {width:5,height: 5, },
        shadowOpacity: 1.0,
        marginBottom: 10,}}>
        <View style={styles.container2} >
            <Entypo name= "youtube" size={28} color="red"/>
            <Text style={{fontSize: 20,
                marginLeft: 10,
                fontWeight: 'bold',
                color:iconColor}}  >
                YouTube
            </Text>
        </View>
        <View style={styles.container3} >
        
        <Entypo name= "video-camera" size={24} color={iconColor}/>
        <FontAwesome name="search" size={24} color={iconColor}
        onPress={()=>navigation.navigate('Search')}/>
        <MaterialIcons name="toggle-on" size={24} color={iconColor} 
        onPress={()=>dispatch({type:"changeTheme", payload: !currentTheme})} />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
        
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


});
