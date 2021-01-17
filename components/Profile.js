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

const Profile = ({navigation}) => {
  const [fullname, onChangeFullname] = useState('');
  const [school, onChangeSchool] = useState('');
  const [program, onChangeProgram] = useState('');
  const [whatyear, onChangeWhatyear] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      
        <SafeAreaView style={styles.body}>
        <View style={styles.spacingtext}>
                <Text style={styles.spacingtext}>+</Text>
        </View>

         <View style={styles.circle}>
                <Text style={styles.title}>+</Text>
         </View>
            
         <Text style={styles.headerText}>Enter a profile picture!</Text>
            
         <View style={{flex:80}}/>
          <Text style={styles.headerText}>Tell Us Your Name</Text>
           <View style={styles.answerFormat}>
            <TextInput style={styles.answertext}
            placeholder = "Full Name"
            onChangeText={text=>onChangeFullname(text)}
            value={fullname}/>
           </View>

            <View style={{flex:75}}/>
            <Text style={styles.headerText}>What school do you go to?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="School Name"
                  onChangeText={text=>onChangeSchool(text)}
                  />
             </View>

            <View style={{flex:75}}/>
            <Text style={styles.headerText}>What are you studying?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="Program"
                  onChangeText={text=>onChangeProgram(text)}
                  />
            </View>

            <View style={{flex:75}}/><Text style={styles.headerText}>Current year?</Text>
              <View style={styles.answerFormat}>
                  <TextInput style={styles.answertext}
                  placeholder="Year of Study"
                  onChangeText={text=>onChangeWhatyear(text)}
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
    fontStyle:"italic",
    backgroundColor:"white",
    borderRadius:3
  },

answerFormat: {
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
    color: "navy",
    fontStyle:"italic"
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
    fontStyle:"italic"
  },

background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});

export default Profile;
