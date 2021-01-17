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

const Login = ({navigation}) => {
    const [value, onChangeText] = useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex: 2}}></View>
            <View>
                <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value} />
            </View>
            <View>
                <TextInput secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeText(text)} value={value}/>
            </View>
            <View style={{flex: 2}}></View>            
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.hLineContainer}>
              <View style={styles.hLine}/>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            
            <View style={{flex: 2}}></View>
          </View>
      </SafeAreaView>
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
  textBox: {

  },
});

export default Login;
