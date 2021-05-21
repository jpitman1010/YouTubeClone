import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';


const LittleCard = ({name})=>{
    return(
        <View style={styles.LittleCards}>
            <Text  style={styles.text}>{name}</Text>
        </View>
    )
}

const Explore = ()=>{
    const cardData = useSelector(state=>{
        return state.cardData
      })
    return (
        <View style={{flex:1}}>
            <Header />
            <ScrollView>
                <View style={styles.container}>
                    <LittleCard name="Gaming"/>
                    <LittleCard name="Trending"/>
                    <LittleCard name="News"/>
                    <LittleCard name="Movies"/>
                    <LittleCard name="Music"/>
                    <LittleCard name="Fashion"/>
                </View>
                <Text style={styles.text2}>Trending Videos</Text>
                <FlatList
                    data={cardData}
                    renderItem={({item})=>{
                        return <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                        />
                    }}
                    keyExtractor={item=>item.id.videoId}
                />
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    LittleCards: {
        backgroundColor:"red",
        width:180,
        height:30,
        borderRadius:4,
        marginTop: 5,
  
    },
    text: {
        textAlign: "center",
        color: "white",
        fontSize:22,
    },
    container: {
        flexDirection:"row", 
        flexWrap:"wrap", 
        justifyContent:"space-around"
    },
    text2: {
        margin: 8,
        fontSize: 22,
        borderBottomWidth: 1,
        borderBottomColor: "black"
    }

  });
  

export default Explore;