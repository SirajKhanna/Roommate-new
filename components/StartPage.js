/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
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

const StartPage = ({navigation}) => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground source={require('../assets/get-started.png')} style={styles.background}>
        <SafeAreaView style={styles.body}>
            <View style={{flex:3}}/>
            <View style={styles.circle}>
                <Text style={styles.title}>hello roomie!</Text>
            </View>
            <View style={{flex:4}}/>
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Get Started!</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            
            <View style={{flex:1}}/>
        </SafeAreaView>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 50,
    opacity: 1,
  },
  circle: {
      height: 200,
      width: 200,
      borderRadius: 100,
      backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLogin: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "#EAC435",
    borderColor: "#EAC435",
    opacity: 1,
    paddingLeft: 60,
    paddingRight: 60,
  },
  title: {
    color: "yellow",
    fontSize: 30,
  },
  buttonText: {
    fontSize: 32,
    textAlign: "center",
    color: "black",
  },
  hLine: {
    height: 1,
    borderColor: "black",
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

export default StartPage;
