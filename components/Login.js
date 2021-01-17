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
    //const [value, onChangeText] = useState('');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex:2}}/>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.sectionContainer}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('');
                }}>
                <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
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
    textAlign: "center",
    color: "black",
  },
  body: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  loginTitle: {
      fontSize: 30,
    fontWeight: "bold",
  }
});

export default Login;
