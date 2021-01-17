/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
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

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex:2}}/>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email Address"
                    onChangeText={text => onChangeEmail(text)}
                    value={email}/>
            </View>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.inputText}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    onChangeText={text => onChangePassword(text)}
                    value={password}/>
            </View>
            <View style={styles.sectionContainer}>
                <TouchableWithoutFeedback
                    onPress={() => {
                    navigation.navigate('Home');
                    }}>
                    <View style={styles.buttonLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                    onPress={() => {
                    navigation.navigate('SignUp');
                    }}>
                    <Text style={styles.signUpLink}>Sign up for hello roomies!</Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{flex:2}}/>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "#EAC435",
    borderColor: "#EAC435",
    paddingLeft: 90,
    paddingRight: 90,
  },
  buttonText: {
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center",
    color: "black",
  },
  body: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  loginTitle: {
      fontSize: 30,
    fontWeight: "bold",
  },
  textContainer: {
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "white",
    width: "85%",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 24,
  },
  inputText: {
    fontSize: 15,
    color: "black",
    fontStyle:"italic",
    paddingLeft: 100,
    paddingRight: 100,
  },
  signUpLink: {
      marginTop: 15,
      fontSize: 15,
      color: "black",
      textAlign: "center",
  },
});

export default Login;
