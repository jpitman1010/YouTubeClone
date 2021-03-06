import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { Provider, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import Constant from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducer'

const customDarkTheme={
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red",
    border:"black",

  }
}
const rootReducer = combineReducers({
  cardData:reducer, //[]
  darkMode: themeReducer //false
})
const store = createStore(rootReducer)

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  const {colors} = useTheme()
  const selectedIcon = colors.tabIcon
  return(
    <Tabs.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        }
        else if (route.name === 'Subscribe') {
          iconName = 'subscriptions'
        }
        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={28} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
  >
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="Explore" component={Explore}/>
      <Tabs.Screen name="Subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default ()=>{
  return(
  <Provider store={store}>
    <Navigation />
   </Provider>
  )
}

export function Navigation() {
  let currentTheme = useSelector(state=>{
    return state.darkMode
  })
  return (
      <NavigationContainer theme={currentTheme? customDarkTheme:customDefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Root Home" component={RootHome} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
