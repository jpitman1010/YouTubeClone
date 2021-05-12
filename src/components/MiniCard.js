import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


const MiniCard = ()=>{
    return(
        <View style={{flexDirection:"row", margin:10}}>
              <Image 
            source={{uri:'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}}
            style={styles.images}
            />
            <View style={styles.textView}  ellipsizeMode="tail">
                <Text 
                style={styles.text}
                numberOfLines={3}> 
                This is a mini-card page that shows up on the search page.  It will do ... if I type too much.
                </Text>
                <Text style={styles.text2}>
                    And this is the description after the title of the minicard.
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