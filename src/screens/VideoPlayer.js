import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import Constant from 'expo-constants';
import Header from '../components/Header';
import { Webview } from 'react-native-webview';


const VideoPlayer = ({route})=>{
    const {videoId, title} = route.params
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Webview
                javaScriptEnabled={true}
                source={{uri:`https://www.youtube.com/embed/${videoId}`}} />
            </View>
            <Text style={styles.text}
            numberOfLines={2}
            ellipsizeMode="tail">
                {title}
            </Text>
            <View style={{borderBottomWidth:1}} />
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constant.statusBarHeight,
       
    },
    text: {
        fontSize:20,
        width: Dimensions.get('screen').width -50,
        margin:8
    }

});


export default VideoPlayer;