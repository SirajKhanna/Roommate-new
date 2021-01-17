/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput, 
  TouchableWithoutFeedback,
  ImageBackground,
  StatusBar,
} from 'react-native';

const Confirmation = ({navigation}) => {
  

  return (
    <>
      <StatusBar barStyle="dark-content" />
      
        <SafeAreaView style={styles.body}>
        <View style={styles.spacingtext}>
                <Text style={styles.spacingtext}>+</Text>
        </View>
   
         <Text style={styles.headerAloneText}>Hello Roomie!</Text>
            

            <View style={{flex:30}}/>

            <Text style={styles.headerAloneText}>Your account has successfully been created!</Text>
             <View style={{flex:30}}/>
            <Text style={styles.headerAloneText}>Setup your profile and start matching!</Text>
          
            
            <View style={{flex:30}}/>
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Next</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            
            <View style={{flex:75}}/>
        </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

headerAloneText:{
    fontSize: 30,
    textAlign: "center",
    color: "navy blue",
    fontStyle:"oblique"
  },

spacingtext:{
   color:"#fcd158",
   fontSize:130
},
body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#fcd158"
  },

sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 50,
    opacity: 1,
  },

buttonLogin: {
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "black",
    opacity: 1,
    paddingLeft: 40,
    paddingRight: 40,
  },

title: {
    color: "#EAC435",
    fontSize: 80,
  },

buttonText: {
    fontSize: 32,
    textAlign: "center",
    color: "#E5E5E5",
    fontStyle:"oblique"
  },

hLine: {
    height: 1,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    width: "75%",
    opacity: 0.5,
  },

hLineContainer: {
    justifyContent: "center",
    alignItems: "center"
  },

background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});

export default Confirmation;
