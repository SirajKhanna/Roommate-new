
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const SignUp = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.body}>
            <View style={{flex: 2}}></View>
            <View style={{flex: 2}}></View>            
            <View style={styles.sectionContainer}>
            </View>
            <View style={styles.hLineContainer}>
              <View style={styles.hLine}/>
            </View>
            <View style={styles.sectionContainer}>
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
});

export default SignUp;
