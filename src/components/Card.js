import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';


const Card =(props)=>{
    return(
        <View marginBottom={10.5} margin={2}>
            <Image 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
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
                            {props.title}
                    </Text>
                    <Text>{props.channel}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;