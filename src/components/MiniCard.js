import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


const MiniCard = (props)=>{
    return(
        <View style={{flexDirection:"row", margin:10}}>
              <Image 
            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
            style={styles.images}
            />
            <View style={styles.textView}  ellipsizeMode="tail">
                <Text 
                style={styles.text}
                numberOfLines={3}> 
                {props.title}
                </Text>
                <Text style={styles.text2}>
                    {props.channel}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textView: {
        width: Dimensions.get('screen').width/2,
        marginBottom: 10,
        paddingLeft: 10,
        
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 12,
    },
    images: {
        width:'45%',
        height: 100,
    }
  });

export default MiniCard;