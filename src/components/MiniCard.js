import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation,useTheme } from '@react-navigation/native';


const MiniCard = (props)=>{
    const navigation = useNavigation();
    const {colors} = useTheme();
    const textColor = colors.iconColor;

    return(
        <TouchableOpacity
        onPress={()=>navigation.navigate("VideoPlayer",{videoId: props.videoId, title: props.title})}
        >
            <View style={{flexDirection:"row", margin:10}}>
                <Image 
                source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                style={styles.images}
                />
                <View style={styles.textView}  ellipsizeMode="tail">
                    <Text 
                    style= {{fontSize:18,fontWeight:'bold',color:textColor}}
                    numberOfLines={3}> 
                    {props.title}
                    </Text>
                    <Text style={{fontSize: 12,color:textColor}}>
                        {props.channel}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textView: {
        width: Dimensions.get('screen').width/2,
        marginBottom: 10,
        paddingLeft: 10,
        
    },

    images: {
        width:'45%',
        height: 100,
    }
  });

export default MiniCard;