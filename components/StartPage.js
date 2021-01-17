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
            
        </SafeAreaView>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "black",

  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  body: {
    backgroundColor: "#E5E5E5",
    flex: 1,
    opacity: 0,
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 24,
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
