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

const Setup2 = ({navigation}) => {
  const [gender, onChangeGender] = useState('');
  const [languages, onChangeLanguage] = useState('');
  const [country, onChangeCountry] = useState('');
  const [kilometers, onChangeKilometers] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      
        <SafeAreaView style={styles.body}>
        <View style={styles.spacingtext}>
                <Text style={styles.spacingtext}>+</Text>
        </View>
   
         <Text style={styles.headerText}>Tell us more about yourself!</Text>
            
         <View style={{flex:80}}/>
          <Text style={styles.headerText}>What is your gender/preferred gender pronouns?</Text>
           <View style={styles.answerFormat}>
            <TextInput style={styles.answertext}
            placeholder = "Enter gender/pronouns"
            onChangeText={text=>onChangeGender(text)}
            value={gender}/>
           </View>

            <View style={{flex:75}}/>
            <Text style={styles.headerText}>What languages can you speak?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="Enter languages"
                  onChangeText={text=>onChangeLanguage(text)}
                  value={languages}
                  />
             </View>

            <View style={{flex:75}}/>
            <Text style={styles.headerText}>What is your nationality?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="Enter country"
                  onChangeText={text=>onChangeCountry(text)}
                  value={country}
                  />
            </View>

            <View style={{flex:75}}/><Text style={styles.headerText}>What is the maximum distance you are willing to live from campus?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder= "Enter a distance in km"
                  onChangeText={text=>onChangeKilometers(text)}
                  value={kilometers}
                  />
             </View>

            <View style={{flex:75}}/>
          
            
            <View style={{flex:0}}/>
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

answertext:{
    fontSize: 23,
    textAlign: "left",
    color: "#E5E5E5",
    fontStyle:"oblique",
    backgroundColor:"white",
    borderRadius:3
  },

answerFormat: {
    alignContent:"left",
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor:"white",
    borderColor: "#E5E5E5",
    paddingLeft: 60,
    paddingRight: 60,
  },

headerText:{
    fontSize: 25,
    textAlign: "left",
    color: "navy blue",
    fontStyle:"oblique"
  },

spacingtext:{
   color:"#fcd158",
   fontSize:50
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

circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },

buttonLogin: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "black",
    opacity: 1,
    paddingLeft: 60,
    paddingRight: 60,
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

export default Setup2;
