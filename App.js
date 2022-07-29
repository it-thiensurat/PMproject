/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   View,
   Platform,
   YellowBox,
   ActivityIndicator
 } from 'react-native';
 console.disableYellowBox = true
 import { connect } from 'react-redux'
 import { createStackNavigator } from '@react-navigation/stack'
 import { NavigationContainer } from '@react-navigation/native'
 import { Provider as PaperProvider } from 'react-native-paper'
 
 import {
   secondaryColor
 } from './utils/contants'
 
 import {
   setCustomView,
   setCustomTextInput,
   setCustomText,
   setCustomImage,
   setCustomTouchableOpacity,
 } from 'react-native-global-props'
 
 const customTextProps = {
   style: {
     fontSize: 22,
     fontFamily: Platform.OS == 'android' ? 'DBYord' : 'DB Yord X',
   }
 };
 
 setCustomTextInput(customTextProps);
 setCustomText(customTextProps);
 
 import Main from './screen/MainScreen'
 import Login from './screen/LoginScreen'
//  import Splash from './screen/SplashScreen'
 
 import styles from './style/style'
 
 const Stack = createStackNavigator();
 function MyStack() {
   return (
     <Stack.Navigator
      //  headerMode='none'
      screenOptions={{
        headerShown: false
      }}
       initialRouteName='Login'>
       {/* <Stack.Screen name="Splash" component={Splash} /> */}
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Main" component={Main} />
     </Stack.Navigator>
   );
 }
 
 class App extends React.Component {
 
   render() {
 
     const props = this.props.reducer
 
     return (
       <NavigationContainer>
         <PaperProvider>
           <MyStack />
         </PaperProvider>
         {
           props.indicator ?
             <View style={[styles.loadingIndicator]}>
               <ActivityIndicator size='large' color={secondaryColor} />
             </View>
             :
             null
         }
       </NavigationContainer>
     )
   }
 };
 
 const mapStateToProps = (state) => ({
   reducer: state.fetchReducer
 })
 
 const mapDispatchToProps = {
 
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(App)