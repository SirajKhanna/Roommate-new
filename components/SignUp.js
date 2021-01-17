import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native';

const SignUp = ({navigation}) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [verifyPassword, onChangeVerifyPassword] = useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex: 10}}></View>
            <View>
                <Text style={styles.headerText}>Create Account</Text>
            </View>

            <View style={{flex: 1}}></View>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.buttonText}
                    placeholder="Email Address"
                    onChangeText={text => onChangeEmail(text)}
                    value={email}/>
            </View>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.buttonText}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                    onChangeText={text => onChangePassword(text)}
                    value={password}/>
            </View>
            <View style={styles.textContainer}>
                <TextInput
                    style={styles.buttonText}
                    secureTextEntry={true}
                    placeholder="Verify Password"
                    onChangeText={text => onChangeVerifyPassword(text)}
                    value={verifyPassword}/>
            </View>
            <View style={{flex: 2}}></View>
            <TouchableWithoutFeedback onPress={() => {navigation.navigate('Profile');}}>
                <View style={styles.signUpButton}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>
            </TouchableWithoutFeedback>
            <View style={{flex: 10}}></View>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#FDFDFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText:{
    fontSize: 40,
    textAlign: "center",
    color: "black",
    fontStyle:"italic",
    fontWeight:"bold",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
    fontStyle:"italic",
  },
  textContainer: {
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: "white",
    width: "85%",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 24,
    paddingRight: 100,
    paddingLeft: 100,
  },
  signUpButton: {
    borderRadius: 100,
    backgroundColor: "#fcd158",
    borderWidth: 0,
  },
signUpText:{
    fontSize: 30,
    textAlign: "center",
    color: "black",
    fontStyle:"italic",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 80,
    paddingLeft: 80,
  },
});

export default SignUp;
