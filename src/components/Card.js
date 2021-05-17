import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';


const Card =()=>{
    return(
        <View marginBottom={10.5} margin={2}>
            <Image 
            source={{uri:'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
            style={{
                width:'100%',
                height: 200,
            }}
            />
            <View style={{flexDirection:'row', margin:5,}}>
                <MaterialIcons name="account-circle" size={41} color="black" />
                <View style={{marginLeft:10.5, width:Dimensions.get('screen').width -50}}>
                    <Text style={{fontSize:21}} 
                        ellipsizeMode='tail' 
                        numberOfLines={2}>
                        Dare to dream as big as the universe! 
                    </Text>
                    <Text>Reach for the stars!</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;