import React from 'react';
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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex: 2}}></View>
            <View>
             <TextInput secureTextEntry={true} style={{ height: 40, borderColor: 'grey', borderWidth: 0 }}/>
               <Text style={styles.headerText}>Create Account</Text>
                
            </View>
            <View style={{flex: 2}}></View>            
            <View style={styles.sectionContainer}>
            <View></View>
            
            <View></View>
            
            <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Email Address</Text>
                </View>
            </View>
            <View style={styles.hLineContainer}>
              <View style={styles.hLine}/>
               <View></View>
            
            </View>
             <View></View>
            <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Password</Text>
                </View>
            <View style={styles.sectionContainer}>
            </View>
            <View style={styles.buttonLogin}>
                  <Text style={styles.buttonText}>Verify Password</Text>
                </View>
                
            <View style={{flex: 2}}></View>
            <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('StartPage');
                }}>
            <View style={styles.continueLogin}>
            
                  <Text style={styles.continueText}>Sign Up</Text>
                </View>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonLogin: {
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor: "white",

  },

continueLogin: {
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor: "#fcd158",

  },

  headerText:{
    fontSize: 45,
    textAlign: "center",
    color: "navy blue",
    fontStyle:"oblique"


  },

   continueText:{
    fontSize: 30,
    textAlign: "center",
    color: "navy blue",
    fontStyle:"oblique"




  },

  buttonText: {
    fontSize: 30,
    textAlign: "center",
    color: "navy blue",
    fontStyle:"oblique"
    
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
    borderColor: "#E5E5E5",
    borderWidth: 10,
    width: "75%",
    opacity: 0.5,
  },
  hLineContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  textbox:{
    height:1000,
    borderColor:"green",
  }
});

export default SignUp;
