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

const Setup3 = ({navigation}) => {
  const [messy, onChangeMessy] = useState('');
  const [wake, onChangeWake] = useState('');
  const [pets, onChangePets] = useState('');
  const [smoke, onChangeSmoke] = useState('');
  const [sleep, onChangeSleep] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      
        <SafeAreaView style={styles.body}>
        <View style={styles.spacingtext}>
                <Text style={styles.spacingtext}>+</Text>
        </View>
   
         <Text style={styles.headerAloneText}>Final step for us to get to know you!</Text>
            
         <View style={{flex:80}}/>
          <Text style={styles.headerText}>How messy are you from 0 (extremely clean) to 10 (extremely messy)?</Text>
           <View style={styles.answerFormat}>
            <TextInput style={styles.answertext}
            placeholder = "Enter number from 0-10"
            onChangeText={text=>onChangeMessy(text)}
            value={messy}/>
           </View>

            <View style={{flex:75}}/>
            <Text style={styles.headerText}>What time do you sleep on average?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="Enter time"
                  onChangeText={text=>onChangeSleep(text)}
                  value={sleep}
                  />
             </View>

            <View style={{flex:75}}/>
            <Text style={styles.headerText}>What time do you wake up on average?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="Enter time"
                  onChangeText={text=>onChangeWake(text)}
                  value={wake}
                  />
            </View>

            <View style={{flex:75}}/><Text style={styles.headerText}>Do you have any pets? Please specify.</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder= "Enter pets"
                  onChangeText={text=>onChangePets(text)}
                  value={pets}
                  />
             </View>
           
            <View style={{flex:75}}/><Text style={styles.headerText}>Do you smoke?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder= "Answer yes or no"
                  onChangeText={text=>onChangeSmoke(text)}
                  value={smoke}
                  />
                </View>

            <View style={{flex:75}}/>
          
            
            <View style={{flex:0}}/>
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Confirmation');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Complete Profile</Text>
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
    fontSize: 23,
    textAlign: "left",
    color: "navy blue",
    fontStyle:"oblique"
  },

headerAloneText:{
    fontSize: 27,
    textAlign: "center",
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

export default Setup3;
