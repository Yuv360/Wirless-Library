import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import BookTransaction from './screens/BookTransaction'
import Search from './screens/Search'
export default class App extends React.Component {
  render(){
  return (
   <View>

<AppContainer>

</AppContainer>

   </View>
  )
}}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransaction},
  Search:{screen:Search}
},
{
  defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{

   const routeName = navigation.state.routeName()
   if(routeName==='Transaction'){
     return(
<Image
source = {require('./assets/book.png')}

style = {{
  width:40,
  height:40
}}
>

</Image>
     )
   }
   else if(routeName==='Search'){
     return(
       <Image
       source = {require('./assets/searchingbook.png')}
       
       style = {{
width:40,
height:40

       }}
       >

       </Image>
     )
   }
  }
  })


  
}
)

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
